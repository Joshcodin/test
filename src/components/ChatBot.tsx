import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { initializeChat, getChatResponse } from "../utils/gemini";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initChat = async () => {
        await initializeChat();
        setMessages([
          {
            text: "Hello! I'm the Justice for All legal assistant. How can I help you today?",
            isBot: true,
            timestamp: new Date(),
          },
        ]);
      };
      initChat();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await getChatResponse(input);
      const botMessage: Message = {
        text: response,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        text: "I apologize, but I'm having trouble connecting. Please try again or contact our office directly.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50">
          <div className="bg-slate-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Justice-4-All</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-4 ${msg.isBot ? "text-left" : "text-right"}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    msg.isBot
                      ? "bg-gray-100 text-gray-800"
                      : "bg-amber-500 text-white"
                  }`}
                >
                  {msg.text}
                  <div
                    className={`text-xs mt-1 ${
                      msg.isBot ? "text-gray-500" : "text-amber-100"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  isLoading ? "Please wait..." : "Ask Justice-4-All..."
                }
                disabled={isLoading}
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-amber-500 disabled:bg-gray-100"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-amber-500 text-white p-2 rounded-lg hover:bg-amber-600 transition-colors disabled:bg-gray-400"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
