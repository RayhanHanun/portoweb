"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { brutalSpring } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

const INIT_MESSAGE: ChatMessage = {
  role: "model",
  text: "> INITIALIZING AI MODULE...\n> ACCESS GRANTED. I am Rayhan Hanun's AI Assistant. Ask me anything about his qualifications or experience.",
};

export default function AITerminal() {
  const [messages, setMessages] = useState<ChatMessage[]>([INIT_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new messages or loading state change
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = { role: "user", text: trimmed };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      if (!res.ok || !res.body) {
        throw new Error("Stream unavailable");
      }

      // Add empty model message that will be filled by the stream
      setMessages((prev) => [...prev, { role: "model", text: "" }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        // Append chunk to the last message (the model response)
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = {
            ...copy[copy.length - 1],
            text: copy[copy.length - 1].text + chunk,
          };
          return copy;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "[SYSTEM ERROR]: Connection failed. Retry." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="ai-assistant"
      className="px-6 md:px-8 lg:px-8 py-12 lg:py-20 max-w-7xl mx-auto"
    >
      {/* Section header */}
      <div className="font-mono text-neo-green text-sm mb-8">
        <span className="text-neo-pink">{">"}</span> execute ai_assistant.sh
      </div>

      {/* Terminal Container */}
      <div className="bg-black border-2 border-neo-green shadow-[8px_8px_0px_0px_#00FF41] overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-neo-green border-b-2 border-black">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 bg-black border-2 border-black" />
            <span className="w-3 h-3 bg-black/30 border-2 border-black" />
            <span className="w-3 h-3 bg-black/30 border-2 border-black" />
          </div>
          <span className="font-mono text-xs text-black font-bold tracking-wider uppercase ml-2">
            AI_ASSISTANT.sh
          </span>
        </div>

        {/* Chat Log Area */}
        <div
          ref={scrollRef}
          className="h-[500px] overflow-y-auto p-4 md:p-6 space-y-4 scrollbar-thin"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#00FF41 #000000",
          }}
        >
          {messages.map((msg, i) => (
            <div key={i} className="font-mono text-sm leading-relaxed">
              {msg.role === "user" ? (
                <div>
                  <span className="text-neo-pink font-bold">
                    user@portfolio:~$&nbsp;
                  </span>
                  <span className="text-neo-white">{msg.text}</span>
                </div>
              ) : (
                <div className="text-neo-green">
                  <span className="text-neo-green/60 font-bold">
                    [AI]:&nbsp;
                  </span>
                  <ReactMarkdown
                    components={{
                      p: ({ ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                      ul: ({ ...props }) => <ul className="list-disc ml-5 mb-4 space-y-2 marker:text-[#00FF41]" {...props} />,
                      ol: ({ ...props }) => <ol className="list-decimal ml-5 mb-4 space-y-2 marker:text-[#00FF41]" {...props} />,
                      li: ({ ...props }) => <li className="pl-2" {...props} />,
                      h1: ({ ...props }) => <h1 className="font-bold mt-6 mb-3 text-neo-yellow uppercase tracking-wider" {...props} />,
                      h2: ({ ...props }) => <h2 className="font-bold mt-6 mb-3 text-neo-yellow uppercase tracking-wider" {...props} />,
                      h3: ({ ...props }) => <h3 className="font-bold mt-6 mb-3 text-neo-yellow uppercase tracking-wider" {...props} />,
                      strong: ({ ...props }) => <strong className="font-black text-neo-yellow bg-black/30 px-1" {...props} />,
                      code: ({ ...props }) => <code className="bg-gray-800 text-[#FF00FF] px-1 py-0.5 text-xs font-mono" {...props} />,
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isLoading && messages[messages.length - 1]?.text === "" && (
            <div className="font-mono text-sm text-neo-yellow animate-pulse">
              <span className="text-neo-yellow/60 font-bold">
                [SYSTEM]:&nbsp;
              </span>
              {">"} QUERYING DATABASE...
            </div>
          )}
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-stretch border-t-2 border-neo-green"
        >
          <div className="flex items-center pl-4 bg-black">
            <span className="font-mono text-sm text-neo-pink font-bold whitespace-nowrap">
              {">"}&nbsp;
            </span>
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Rayhan..."
            disabled={isLoading}
            aria-label="Ask AI Assistant"
            className="flex-1 bg-black text-neo-white font-mono text-base md:text-sm px-2 py-4 outline-none placeholder:text-neo-white/20 disabled:opacity-50"
          />
          <motion.button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="font-mono text-sm px-6 py-4 bg-neo-green text-black font-bold tracking-wider uppercase border-l-2 border-black disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white transition-colors duration-100"
            whileHover={
              isLoading || !input.trim() ? {} : { x: -2, y: -2 }
            }
            whileTap={
              isLoading || !input.trim() ? {} : { x: 2, y: 2 }
            }
            transition={brutalSpring}
          >
            EXECUTE
          </motion.button>
        </form>
      </div>
    </section>
  );
}
