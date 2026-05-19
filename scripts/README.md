# scripts/

Utilitários one-shot do projeto.

## generate-preview.mjs

Renderiza `public/convite/preview.jpg` (1200x630) a partir do design em
`preview-image.html`. Usado como og:image do convite no WhatsApp/Telegram.

**Rodar:**
```bash
npm install --no-save playwright
npx playwright install chromium-headless-shell
node scripts/generate-preview.mjs
```

Depois, commit do novo `public/convite/preview.jpg` e push pra acionar deploy.
