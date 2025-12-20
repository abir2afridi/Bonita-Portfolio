
import { GoogleGenAI } from "@google/genai";

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
  try {
    // Correct initialization using named parameter and direct process.env.API_KEY access
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using ai.models.generateContent with model and prompt as required
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    // Accessing .text property directly (not as a method)
    return response.text || "I processed your request but have no words right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to my creative brain. Please try again later!";
  }
};
