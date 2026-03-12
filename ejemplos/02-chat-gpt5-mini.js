// Ejemplo 2: Chat con GPT-5 Mini
// GPT-5 Mini es más económico y rápido.
// Ideal para tareas simples donde no necesitas el modelo más potente.
// Input: $0.25 / 1M tokens (vs $2.50 de GPT-5.4)
// Ejecutar: node 02-chat-gpt5-mini.js

import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI();

const response = await client.responses.create({
  model: "gpt-5-mini",
  input: "Dame 3 consejos para aprender a programar.",
});

console.log("Modelo usado:", response.model);
console.log("\n--- Respuesta de GPT-5 Mini ---\n");
console.log(response.output_text);
