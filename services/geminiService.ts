
import { GoogleGenAI, Type, Modality, GenerateContentResponse } from "@google/genai";

export class GeminiService {
  private ai: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  // Google Search Grounding for Dental Knowledge
  async dentalSearch(query: string): Promise<{ text: string; sources: any[] }> {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Research the following dental health query and provide an up-to-date professional answer for a patient: ${query}`,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text || "No information found.";
      const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      return { text, sources };
    } catch (error) {
      console.error("Dental Search Error:", error);
      throw error;
    }
  }

  // Google Maps Grounding for local area info
  async getNearbyFacilities(lat: number, lng: number): Promise<{ text: string; locations: any[] }> {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `What are the closest pharmacies and health clinics near California Dental at 1009 Glenoaks Blvd, San Fernando?`,
        config: {
          tools: [{ googleMaps: {} }],
          toolConfig: {
            retrievalConfig: {
              latLng: { latitude: lat, longitude: lng }
            }
          }
        },
      });

      const text = response.text || "Searching nearby facilities...";
      const locations = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      return { text, locations };
    } catch (error) {
      console.error("Maps Grounding Error:", error);
      throw error;
    }
  }

  // Image Generation with Nano Banana Pro
  async generateDentalVisual(prompt: string, size: "1K" | "2K" | "4K" = "1K"): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: `High quality, medical-grade 3D visualization of: ${prompt}. Professional, clean lighting.` }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: size
          }
        },
      });

      let imageUrl = "";
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }
      return imageUrl;
    } catch (error) {
      console.error("Image Gen Error:", error);
      throw error;
    }
  }

  // Video Animation with Veo
  async animateDentalPhoto(base64Image: string, prompt: string, isPortrait: boolean = false): Promise<string> {
    try {
      let operation = await this.ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        image: {
          imageBytes: base64Image.split(',')[1],
          mimeType: 'image/png',
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: isPortrait ? '9:16' : '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await this.ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
      const videoBlob = await response.blob();
      return URL.createObjectURL(videoBlob);
    } catch (error) {
      console.error("Veo Animation Error:", error);
      throw error;
    }
  }
}
