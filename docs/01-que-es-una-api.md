# ¿Qué es una API?

**API** significa **Application Programming Interface** (Interfaz de Programación de Aplicaciones).

Es una forma en que **dos programas se comunican entre sí**.

---

## Analogía simple

Piensa en un **restaurante**:

1. Tú (el cliente) haces un **pedido** al mesero
2. El mesero lleva tu pedido a la **cocina**
3. La cocina prepara tu comida
4. El mesero te trae la **respuesta** (tu plato)

```
Tú (programa) → Pedido (request) → API → Servidor (cocina)
                                      ↓
Tú (programa) ← Respuesta (response) ←
```

- **Tú** = tu programa (JavaScript, Python, etc.)
- **El mesero** = la API
- **La cocina** = el servidor de OpenAI
- **El pedido** = tu petición HTTP (request)
- **El plato** = la respuesta del servidor (response)

---

## ¿Qué es una API REST?

Es el tipo de API más común en la web. Funciona con **peticiones HTTP** (las mismas que usa tu navegador).

Una petición HTTP tiene estas partes:

| Parte | Qué es | Ejemplo |
|-------|--------|---------|
| **URL** | La dirección a donde envías la petición | `https://api.openai.com/v1/responses` |
| **Método** | La acción que quieres hacer | `POST` (enviar datos) |
| **Headers** | Información extra sobre la petición | `Authorization`, `Content-Type` |
| **Body** | Los datos que envías | El mensaje que quieres enviar al modelo |

---

## Ejemplo visual de una petición

```
POST https://api.openai.com/v1/responses            ← URL + Método

Headers:
  Content-Type: application/json                     ← "Envío datos en formato JSON"
  Authorization: Bearer sk-xxxxx                     ← "Esta es mi llave de acceso"

Body:
  {
    "model": "gpt-5.4",                             ← Qué modelo quiero usar
    "input": "Hola, ¿cómo estás?"                   ← Mi mensaje (string o array)
  }
```

---

Siguiente: [02 - Cómo funciona la API de OpenAI](02-como-funciona-openai.md)
