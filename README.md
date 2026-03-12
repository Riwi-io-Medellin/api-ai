# 🤖 Aprende a usar la API de OpenAI

Repositorio educativo para entender cómo funcionan las APIs de inteligencia artificial, específicamente la de **OpenAI**.

> Actualizado: 12 de marzo de 2026

---

## 📚 Documentación

| # | Tema | Archivo |
|---|------|---------|
| 1 | ¿Qué es una API? | [docs/01-que-es-una-api.md](docs/01-que-es-una-api.md) |
| 2 | ¿Cómo funciona la API de OpenAI? | [docs/02-como-funciona-openai.md](docs/02-como-funciona-openai.md) |
| 3 | API Key: qué es y cómo protegerla | [docs/03-api-key.md](docs/03-api-key.md) |

## 💻 Ejemplos prácticos

| # | Modelo | Archivo |
|---|--------|---------|
| 1 | GPT-5.4 | [ejemplos/01-chat-gpt5-4.js](ejemplos/01-chat-gpt5-4.js) |
| 2 | GPT-5 Mini | [ejemplos/02-chat-gpt5-mini.js](ejemplos/02-chat-gpt5-mini.js) |
| 3 | o4-mini (razonamiento) | [ejemplos/03-chat-o4-mini.js](ejemplos/03-chat-o4-mini.js) |

---

## 🚀 Cómo correr los ejemplos

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- Una cuenta en [OpenAI](https://platform.openai.com/)
- Una API Key (ver [docs/03-api-key.md](docs/03-api-key.md))

### Pasos

```bash
# 1. Clona el repo
git clone <url-del-repo>
cd api-ai

# 2. Instala dependencias
cd ejemplos
npm install

# 3. Crea tu archivo .env con tu API Key
cp .env.example .env
# Edita .env y pega tu API Key

# 4. Ejecuta cualquier ejemplo
node 01-chat-gpt5-4.js
node 02-chat-gpt5-mini.js
node 03-chat-o4-mini.js
```

---

## 📁 Estructura del proyecto

```
api-ai/
├── README.md
├── docs/
│   ├── 01-que-es-una-api.md
│   ├── 02-como-funciona-openai.md
│   └── 03-api-key.md
└── ejemplos/
    ├── .env.example
    ├── package.json
    ├── 01-chat-gpt5-4.js
    ├── 02-chat-gpt5-mini.js
    └── 03-chat-o4-mini.js
```
