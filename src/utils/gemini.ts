import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini AI with your API key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Create a context-aware chat model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const legalContext = `You are an AI legal assistant for Justice 4 All law firm. 
Your responses should be professional, informative, and focused on helping potential clients 
understand their legal options. Always recommend scheduling a consultation for specific legal advice. 
Key practice areas include:
- Corporate Law
- Civil Litigation
- Family Law
- Real Estate
- Criminal Defense
- Estate Planning

Office hours: Monday-Friday 9:00 AM - 4:00 PM, Saturday by appointment
Contact: +23276461115, joshuamcoker@gmail.com.com
Location: Orogu, Allen Town.`;

let chat: any = null;

export const initializeChat = async () => {
  chat = model.startChat({
    history: [
      {
        role: "user",
        parts: "Initialize with legal context: " + legalContext,
      },
      {
        role: "model",
        parts:
          "I understand the context and am ready to assist clients with legal inquiries while maintaining professional standards and directing specific legal questions to consultations.",
      },
    ],
    generationConfig: {
      maxOutputTokens: 250,
      temperature: 0.7,
    },
  });
  return chat;
};

export const getChatResponse = async (input: string) => {
  try {
    if (!chat) {
      chat = await initializeChat();
    }
    const result = await chat.sendMessage(input);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error getting Gemini response:", error);
    return "I apologize, but I'm having trouble connecting to our systems. Please try again or contact our office directly at +23276461115 for immediate assistance.";
  }
};
