import { GoogleGenerativeAI } from "@google/generative-ai";

// Use the environment variable from Vite
const apiKey = import.meta.env.VITE_GOOGLE_GEN_AI_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const generateContent = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error calling Google Generative AI API:", error);
    return null;
  }
};

export default generateContent;
