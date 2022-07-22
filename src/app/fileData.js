const packageJSON = (name) =>
  `{
    "name": "${name}",
    "version": "0.0.0",
    "private": true,
    "license": "MIT",
    "main": "dist/index.js",
    "module": "dist/index.js",
    "types": "dist/index.d.ts",
    "type": "module",
    "scripts": {
      "build": "rollup -c"
    },
    "devDependencies": {
      "@rollup/plugin-typescript": "^8.3.3",
      "rollup": "^2.77.0",
      "typescript": "*"
    }
  }`;

const gitignore = `node_modules
*.log
.env.*
*.lock
dist`;

const tsconfig = `{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "baseUrl": "src",
    "declaration": true,
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}`;

const rollup = `import ts from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [ts({ tsconfig: './tsconfig.json' })],
};`;

module.exports = { packageJSON, gitignore, rollup, tsconfig };
