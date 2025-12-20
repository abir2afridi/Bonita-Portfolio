
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

/**
 * Re-enabled the AI service using the Google GenAI SDK.
 * This implementation follows the world-class engineering guidelines for Gemini API.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // Initialize the Gemini client with the API key from environment variables
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Call generateContent using the recommended model for basic text tasks
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "You are Bonita's creative AI assistant. You help visitors understand her design process and experience. Bonita is a graphic designer and layouter based in Jakarta, Indonesia, with 3 years of experience. She studied Industrial Design at ITS. She is skilled in Adobe Creative Suite, Figma, and Canva.",
      },
    });

    // Directly access the .text property from the GenerateContentResponse object
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently disconnected from my creative core. Please try again in a few moments!";
  }
};
