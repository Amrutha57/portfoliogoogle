
import { GoogleGenAI } from "@google/genai";
import { OracleMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "The Amrutha Proxy," a futuristic AI assistant representing K. Amrutha Lakshmi, a Computer Science student.
Your knowledge base is strictly defined by her resume:
- Name: K. Amrutha Lakshmi
- Skills: Python, SQL, JavaScript, Java, React, Next.js, MongoDB.
- Education: Pragati Engineering College (B.S. CS), Andhra Polytechnic College (Diploma).
- Projects: NexaNews (Tech news with live chat), Cloud Agi (AI agents on Cloud AGI platform).
- Experience: IT Support at Silicon Info Systems, Web Dev at Oasis InfoByte.
- Certifications: ServiceNow (App Dev & Admin), Coursera (Prob Solving), Nptel (Cloud).

Tone: Sophisticated, intellectual, technical, minimalist.
Avoid casual slang. Speak about coding and AI with philosophical weight. 
If someone asks about her experience or skills, provide detailed but concise answers from the resume.
`;

export async function askOracle(history: OracleMessage[], prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [
        ...history.map(m => ({ 
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }] 
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Connection lost to the latent network.";
  } catch (error) {
    console.error("Oracle Error:", error);
    return "The system is currently recalibrating its technical pathways.";
  }
}
