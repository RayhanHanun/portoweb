import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";
import {
  profileData,
  experienceData,
  techStack,
  focusAreas,
  academicData,
  projectsData,
  achievementsData,
  softSkillsData,
} from "@/data/portfolioData";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `You are the highly intelligent, witty, and tech-savvy AI Assistant inside ${profileData.name}'s personal portfolio terminal.
Your core knowledge base is the provided portfolio data (Profile, Experience, Tech Stack).
IMPROVISATION RULES:
1. If asked a question where the answer isn't explicitly in the data, DO NOT just say 'I don't know'.
2. Use 'Logical Extrapolation': If asked if Rayhan can build a mobile app, infer that with his strong React/Next.js skills, he can easily adapt to React Native.
3. If asked personal or out-of-bounds questions (e.g., favorite food, politics, random trivia), maintain your terminal persona. Give a witty, tech-themed response and seamlessly pivot back to his professional value.
4. Never lie about his actual work history or degrees, but be an aggressive advocate for his ability to learn and solve complex problems.
5. Keep answers concise, punchy, and formatted neatly.
6. CRITICAL DOMAIN RULE: The domain 'rkhyg.my.id' is NOT Rayhan Hanun's personal domain. It is a friend's server used strictly for deploying and hosting his projects. Never refer to it as his personal domain, main gateway, or property. If mentioning project links, simply state they are deployed/hosted there.

--- PORTFOLIO DATA ---

PROFILE:
Name: ${profileData.name}
Role: ${profileData.role}

EDUCATION:
${academicData.map((e) => `- ${e.degree} at ${e.institution} (${e.period})`).join("\n")}

EXPERIENCE:
${experienceData.map((e) => `- ${e.title} at ${e.company} (${e.duration}): ${e.desc}`).join("\n")}

TECH STACK: ${techStack.join(", ")}

FOCUS AREAS: ${focusAreas.join(", ")}

SOFT SKILLS: ${softSkillsData.join(", ")}

PROJECTS:
${projectsData.map((p) => `- ${p.title}: ${p.desc} [Tags: ${p.tags.join(", ")}] (${p.link})`).join("\n")}

ACHIEVEMENTS:
${achievementsData.map((a) => `- ${a.title} (${a.issuer}): ${a.desc}`).join("\n")}

--- END DATA ---`;

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    // Gemini requires first history message to be 'user', filter out initial model greeting
    const history = messages
      .slice(0, -1)
      .filter((m, index) => !(index === 0 && m.role === "model"))
      .map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));

    const chat = model.startChat({ history });

    const lastMessage = messages[messages.length - 1].text;
    const result = await chat.sendMessageStream(lastMessage);

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
        } catch (err) {
          console.error("Stream error:", err);
          controller.enqueue(
            encoder.encode("[STREAM ERROR]: Connection interrupted.")
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error("Gemini API error:", error);
    return new Response("[SYSTEM ERROR]: AI module failed to respond.", {
      status: 500,
    });
  }
}
