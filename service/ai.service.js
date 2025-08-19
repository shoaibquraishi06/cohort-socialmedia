const { GoogleGenAI } = require("@google/genai");

const GEMINI_API_KEY = "AIzaSyBSvzUCBq3YPTJzsNo5d9CQ2ejeEjikJKU";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];
  // const base64Image = new Buffer.from(file.buffer).toString('base64');
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config: {
      systemInstruction: `
        you generate single caption for the image.
        your caption should be shot and concise.
        you use  hastages emojis in the caption.
        create a aesthetic caption.
        
        `,
    },
  });

  return response.text;
}

module.exports = generateCaption;
