import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    } else {
      console.warn("API_KEY is missing. AI features will be disabled.");
    }
  }
  return aiClient;
};

export const askTutor = async (subject: string, question: string): Promise<string> => {
  const client = getClient();
  if (!client) return "Lo siento, el servicio de IA no está configurado actualmente (falta API KEY).";

  try {
    const model = 'gemini-2.5-flash';
    // Updated prompt to be more adaptive since course content is generalized
    const prompt = `Eres un tutor experto, motivador y amable de la materia: ${subject}.
    Tu objetivo es ayudar a estudiantes de secundaria.
    
    El estudiante te hace la siguiente pregunta o comentario: "${question}".
    
    Instrucciones:
    1. Responde de manera clara y concisa.
    2. Si la pregunta es sobre un video específico que no puedes ver, da una explicación general pero precisa sobre el tema del curso (${subject}).
    3. Fomenta la curiosidad y el aprendizaje.
    4. Usa formato Markdown simple (negritas, listas) para facilitar la lectura.`;

    const response = await client.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "No pude generar una respuesta en este momento.";
  } catch (error) {
    console.error("Error asking Gemini:", error);
    return "Ocurrió un error al consultar a tu tutor virtual. Por favor intenta de nuevo.";
  }
};