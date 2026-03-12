# API Key: qué es y cómo protegerla

## ¿Qué es una API Key?

Es una **contraseña única** que te identifica cuando usas la API. Sin ella, OpenAI no sabe quién hace la petición ni a quién cobrar.

Se ve así:

```
sk-proj-abc123xyz456...
```

---

## ¿Dónde obtenerla?

1. Ve a [platform.openai.com](https://platform.openai.com/)
2. Inicia sesión o crea una cuenta
3. Ve a **API Keys** en el menú lateral (o directo: [platform.openai.com/api-keys](https://platform.openai.com/api-keys))
4. Clic en **"Create new secret key"**
5. Copia la key inmediatamente (solo se muestra una vez)

> ⚠️ Necesitas agregar un método de pago para usar la API. OpenAI cobra por uso (tokens consumidos).

---

## ¿Cómo usarla de forma SEGURA?

### ❌ MAL - Nunca hagas esto

```javascript
// NUNCA pongas tu API Key directamente en el código
const apiKey = "sk-proj-abc123xyz456";
```

Si subes esto a GitHub, cualquiera puede ver y usar tu key (y tú pagas).

### ✅ BIEN - Usa variables de entorno

```javascript
// Lee la key desde una variable de entorno
// El SDK de OpenAI la lee automáticamente si se llama OPENAI_API_KEY
const apiKey = process.env.OPENAI_API_KEY;
```

---

## Cómo configurar variables de entorno

### Paso 1: Crea un archivo `.env`

```bash
# En la carpeta de tu proyecto
OPENAI_API_KEY=sk-proj-tu-key-aqui
```

### Paso 2: Agrega `.env` a `.gitignore`

```bash
# .gitignore
.env
node_modules/
```

> 🔒 Esto evita que tu key se suba a GitHub por accidente.

### Paso 3: Lee la variable en tu código

Con Node.js y el paquete `dotenv`:

```javascript
import "dotenv/config";
import OpenAI from "openai";

// El SDK lee OPENAI_API_KEY automáticamente del entorno
const client = new OpenAI();
```

---

## Resumen de seguridad

| Regla | Por qué |
|-------|---------|
| Nunca escribas la key en el código | Si la subes a GitHub, queda expuesta |
| Usa archivos `.env` | Mantiene la key separada del código |
| Agrega `.env` a `.gitignore` | Evita subirla por accidente |
| No compartas tu key | Cada persona debe tener la suya |

---

**Volver al inicio:** [← README](../README.md)
