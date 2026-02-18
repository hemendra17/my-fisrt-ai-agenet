
# my-ai-agent

A small Vite + React demo that shows an AI-powered chat agent component.

This README explains how to set up and run the project locally and how to obtain a Google API key to use the included `ChatAgent` component.

## What this project does

- Provides a simple chat UI at `src/ChatAgent.jsx` that uses the `@google/generative-ai` client and the Gemini model (`gemini-2.5-flash`) to generate conversational responses.
- Intended as a demo / prototype. The app currently initializes the API client from a browser environment for convenience — move keys to a backend for production.

## Prerequisites

- Node.js 16+ (LTS recommended)
- npm (or yarn / pnpm)
- A Google Cloud project with an API key for the Generative AI / Generative Language API

## Getting a Google API Key (free-tier / trial)

Google Cloud provides a new-user free trial credit (e.g., $300) and some APIs offer free quotas. To get an API key:

1. Go to the Google Cloud Console: https://console.cloud.google.com/
2. Create or select a Google Cloud Project.
3. Enable the Generative AI / Generative Language API for your project. Search for "Generative" in the API Library and enable the appropriate API.
4. In the left menu go to `APIs & Services` → `Credentials` → `Create credentials` → `API key`.
5. (Optional but recommended) Click the created key and restrict it by HTTP referrers or IP addresses and enable only the required APIs.
6. Copy the generated API key.

Notes:
- New Google Cloud users can use the free trial credits for testing. Quotas and billing apply when free credits are exhausted — review Google Cloud pricing and quotas for the Generative API.
- If you need a truly free hosted LLM, consider open-source alternatives hosted locally or community-hosted endpoints.

## Project setup (local)

1. Create a `.env` file in the project root and add your key:

```
VITE_GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
```

2. Add a `.gitignore` entry so you don't commit the `.env` file (example):

```
.env
node_modules/
dist/
```

3. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

4. Open the app in your browser (Vite will show the local URL, usually `http://localhost:5173`).

## How the `ChatAgent` uses the key

- The chat UI is implemented in `src/ChatAgent.jsx`. It reads the API key via `import.meta.env.VITE_GOOGLE_API_KEY` and constructs a `GoogleGenerativeAI` client in the browser for demo purposes.
- On each send, the component builds a short conversation `history` and calls `model.startChat()` / `chat.sendMessage()` to get a response.
- For security, do not keep production keys in client-side code. Instead:
	- Create a small server (Express, Fastify, etc.).
	- Store the API key on the server (env var) and proxy chat requests from the client to the server.

## Environment variables

- `VITE_GOOGLE_API_KEY` — your Google API key. Example: `VITE_GOOGLE_API_KEY=AIza...`

## Example `.env.example`

```
# Copy to `.env` and replace with your key
VITE_GOOGLE_API_KEY=
```

## Security & Privacy

- Do not commit your `.env` or API keys to source control.
- User messages sent to the Generative API may be logged by the provider — avoid sending sensitive personal or production data during testing.

## Troubleshooting

- If the app shows `Failed to fetch response` or authentication errors, verify your API key, that the Generative API is enabled, and that billing/quota are available on your Google Cloud project.
- Check the browser console for detailed error messages.

## Next steps / Production notes

- Move the API calls to a backend to keep the key secret.
- Add rate limiting, input length limits, and content moderation before using in production.

## Contributing

PRs welcome — create a feature branch, run tests (if any), and open a PR.

---

If you want, I can commit this update to `README.md` and push it to your remote. (I will not push keys.)
