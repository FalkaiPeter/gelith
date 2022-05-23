const packageJson = (repo_name, app_name) => `
{
  "name": "${repo_name}/${app_name}",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@vitejs/plugin-react": "^1.3.0",
    "typescript": "^4.6.3",
    "vite": "^2.9.5",
    "vite-tsconfig-paths": "^3.4.1"
  }
}`;

const tsconfigJson = `{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "isolatedModules": true,
    "rootDir": "src",
    "baseUrl": "src"
  },
  "include": ["src", "vite.config.ts"]
}`;

const viteconfigTs = `import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" }), tsconfigPaths()],
});`;

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

const gitignore = `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?`;

const viteenvDTs = `/// <reference types="vite/client" />`;

const mainTs = `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
if(container) createRoot(containet).render(<StrictMode>React App!</StrictMode>);`;

module.exports = { gitignore, indexHtml, mainTs, packageJson, tsconfigJson, viteconfigTs, viteenvDTs };
