// Ejemplo 1: Chat con GPT-5.4
// GPT-5.4 es el modelo flagship de OpenAI (marzo 2026).
// El más inteligente para tareas complejas, agentes y código.
// Ejecutar: node 01-chat-gpt5-4.js

import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI();

const response = await client.responses.create({
  model: "gpt-5.4",
  input: "Explícame qué es una API en 3 líneas simples.",
});

console.log("Modelo usado:", response.model);
console.log("\n--- Respuesta de GPT-5.4 ---\n");
console.log(response.output_text);
