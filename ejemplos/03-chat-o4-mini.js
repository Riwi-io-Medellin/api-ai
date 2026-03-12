/**
 * Ejemplo 3: Chat con o4-mini
 *
 * o4-mini es un modelo de RAZONAMIENTO.
 * Piensa paso a paso antes de responder.
 * Ideal para lógica, matemáticas y código complejo.
 *
 * Ejecutar: node 03-chat-o4-mini.js
 */

import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI();

const response = await client.responses.create({
  model: "o4-mini",
  input:
    "Si tengo 3 cajas y en cada caja hay 2 bolsas, y en cada bolsa hay 4 manzanas, ¿cuántas manzanas tengo en total? Explica paso a paso.",
});

console.log("Modelo usado:", response.model);
console.log("\n--- Respuesta de o4-mini (razonamiento) ---\n");
console.log(response.output_text);
