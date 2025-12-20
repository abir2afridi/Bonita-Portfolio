
import { GoogleGenAI } from "@google/genai";

/**
 * AI Service to communicate with Gemini.
 * Uses the @google/genai SDK to provide a conversational assistant for the portfolio.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // Always initialize the client with the API key from environment variables
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    /**
     * Fix: Used ai.models.generateContent to query GenAI with both model name and prompt.
     * We use 'gemini-3-flash-preview' for basic text tasks like this assistant.
     */
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `You are Bonita Rizka D's creative AI assistant. 
        Bonita is a graphic designer and layouter based in Jakarta, Indonesia. 
        Education: Industrial Design graduate from Institut Teknologi Sepuluh Nopember (ITS), GPA 3.27.
        Experience: 3 years.
        Skills: Adobe Illustrator, Photoshop, After Effects, Figma, Canva, Capcut. 
        Languages: Indonesian (Native), English (Communicative).
        Portfolio highlights: Social Media campaigns (GOALS FOR BLACK), Editorial design (HEALTH AND WELLNESS), and Wedding photography.
        Be helpful, professional, and concise in your responses.`,
      },
    });

    /**
     * Fix: Accessing .text property directly as per the @google/genai guidelines.
     */
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently having some technical difficulties. Please try again later or reach out to Bonita directly.";
  }
};
