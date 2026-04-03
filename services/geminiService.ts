import { GoogleGenAI } from "@google/genai";
import { DEFAULT_STANDARD_MODEL } from "../constants/geminiModels";

export async function transcribeAudio(
  base64Audio: string,
  mimeType: string = "audio/webm",
  modelId?: string
): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = modelId || DEFAULT_STANDARD_MODEL;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Audio,
            },
          },
          {
            text: "Please transcribe the audio accurately in the language it is spoken. If it's Bengali, write in Bengali. If it's English, write in English. Provide only the text transcription, no extra commentary."
          }
        ]
      },
    });

    return response.text || "Transcription failed. No text returned.";
  } catch (error) {
    console.error("Transcription Error:", error);
    throw new Error("Failed to transcribe audio. Please check your connection or API key.");
  }
}
