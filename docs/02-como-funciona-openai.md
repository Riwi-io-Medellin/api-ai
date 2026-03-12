# ¿Cómo funciona la API de OpenAI?

La API de OpenAI te permite enviar texto a un modelo de IA y recibir una respuesta generada.

---

## Endpoint principal

Todas las peticiones van a esta URL (Responses API):

```
POST https://api.openai.com/v1/responses
```

> También existe el endpoint legacy `v1/chat/completions`, pero la API recomendada es **Responses**.

---

## Headers requeridos

Cada petición necesita **dos headers**:

```
Content-Type: application/json
Authorization: Bearer TU_API_KEY
```

| Header | Para qué sirve |
|--------|----------------|
| `Content-Type` | Le dice al servidor que los datos van en formato JSON |
| `Authorization` | Lleva tu API Key para que OpenAI sepa quién eres |

> ⚠️ El formato es `Bearer ` + tu API Key. El espacio después de "Bearer" es obligatorio.

---

## Body de la petición (lo que envías)

Forma simple (solo un string):

```json
{
  "model": "gpt-5.4",
  "input": "¿Qué es JavaScript?"
}
```

Forma con roles (para conversaciones):

```json
{
  "model": "gpt-5.4",
  "input": [
    {
      "role": "user",
      "content": "¿Qué es JavaScript?"
    }
  ]
}
```

| Campo | Qué es |
|-------|--------|
| `model` | Qué modelo de IA quieres usar |
| `input` | Tu mensaje. Puede ser un string simple o un array de mensajes |
| `role` | Quién habla: `"user"` (tú), `"assistant"` (la IA) o `"system"` (instrucciones) |
| `content` | El texto del mensaje |

---

## Respuesta del servidor (lo que recibes)

```json
{
  "id": "resp_abc123",
  "model": "gpt-5.4",
  "output_text": "JavaScript es un lenguaje de programación...",
  "usage": {
    "input_tokens": 12,
    "output_tokens": 50,
    "total_tokens": 62
  }
}
```

| Campo | Qué es |
|-------|--------|
| `output_text` | La respuesta de la IA (lo que más te interesa) |
| `usage` | Cuántos tokens consumiste (los tokens = costo) |

---

## Modelos disponibles (marzo 2026)

| Modelo | Tipo | Precio Input/1M tokens | Ideal para |
|--------|------|----------------------|------------|
| `gpt-5.4` | Chat | $2.50 | Flagship: tareas complejas, agentes, código |
| `gpt-5-mini` | Chat | $0.25 | Tareas simples, bajo costo, alta velocidad |
| `gpt-5-nano` | Chat | $0.05 | Ultra económico, respuestas rápidas |
| `gpt-4.1` | Chat | $2.00 | Modelo no-razonamiento más inteligente |
| `o4-mini` | Razonamiento | $1.10 | Lógica, matemáticas, código complejo |

> 📖 Lista completa de modelos: [platform.openai.com/docs/models](https://platform.openai.com/docs/models)

---

## Flujo completo

```
Tu programa
    │
    ├─ 1. Arma la petición (URL + headers + body)
    │
    ├─ 2. Envía la petición HTTP POST a /v1/responses
    │
    ├─ 3. OpenAI procesa tu mensaje con el modelo elegido
    │
    ├─ 4. Recibes la respuesta JSON
    │
    └─ 5. Extraes response.output_text
```

---

**Siguiente:** [03 - API Key: qué es y cómo protegerla →](03-api-key.md)
