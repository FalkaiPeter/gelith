const packageJson = (repo_name, app_name) => `
{
  "name": "@${repo_name}/${app_name}",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "check": "svelte-check --tsconfig ./tsconfig.json"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^1.0.0-next.30",
    "svelte": "^3.44.0",
    "svelte-check": "^2.2.7",
    "svelte-preprocess": "^4.9.8",
    "tslib": "^2.3.1",
    "typescript": "^4.5.4",
    "vite": "^2.9.9",
    "vite-tsconfig-paths": "^3.4.1"
  }
}
`;

const tsconfigJson = `{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "src",
    "baseUrl": "src",
    "strict": false,
    "allowJs": true,
    "checkJs": true,
    "isolatedModules": true
  },
  "include": ["src", "vite.config.ts"],
  "exclude": ["node_modules", "dist"]
}`;

const viteconfigTs = `import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import tspaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [svelte({ preprocess: sveltePreprocess() }), tspaths()],
});
`;

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Svelte App</title>
  </head>
  <body>
    <div id="app" />
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`;

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

const mainTs = `import App from './App.svelte';

export default new App({
  target: document.getElementById('app'),
});
`;

const appSvelte = `Svelte App`;

module.exports = { gitignore, indexHtml, mainTs, packageJson, tsconfigJson, viteconfigTs, viteenvDTs, appSvelte };
