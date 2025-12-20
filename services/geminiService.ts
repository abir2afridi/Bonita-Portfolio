import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

/**
 * Safely retrieves the API key from the environment.
 * Prevents "process is not defined" errors in browser environments.
 */
const getApiKey = (): string => {
  try {
    // Check if process and process.env exist before accessing
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    console.warn("Could not access process.env.API_KEY safely:", e);
  }
  return '';
};

const systemInstruction = `
You are "Bonita AI", a helpful creative assistant for Bonita Rizka's portfolio website.
Bonita is a Graphic Layouter and Brand Designer based in Indonesia.
Her style is minimalist, elegant, editorial, and focused on clean typography.

Your goal is to answer visitor questions about Bonita's work, experience, or design philosophy.
If asked about design advice, give brief, professional tips aligned with modern minimalist design.
Keep answers concise (under 100 words) and friendly.

Key Profile Data:
- Name: Bonita Rizka D.
- Role: Graphic Layouter & Brand Designer.
- Education: Institut Teknologi Sepuluh Nopember (Industrial Design, GPA 3.27).
- Skills: Adobe Illustrator, Adobe Photoshop, After Effects, Figma, Canva, Capcut.
- Languages: Indonesian (Mother Tongue), English (Communicative).
- Contact: bonitarizkad@gmail.com.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const apiKey = getApiKey();

  if (!apiKey) {
    console.error("API_KEY is missing. Please check your environment variables.");
    return "I'm currently resting. (AI Assistant needs an API Key to wake up).";
  }

  try {
    // Initialize inside the function to ensure the key is fresh and it doesn't crash on module load
    const ai = new GoogleGenAI({ apiKey });
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I processed your request but have no words right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to my creative brain. Please try again later!";
  }
};