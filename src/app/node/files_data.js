const packageJson = (repo_name, name) => `{
  "name": "${repo_name}/${name}",
  "version": "0.0.0",
  "private": true,
  "license": "MIT",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "start": "tsc -w && tsc-alias -w",
    "build": "tsc && tsc-alias"
  },
  "devDependencies": {
    "tsc-alias": "^1.6.7",
    "typescript": "*"
  }
}`;

const tsconfigJson = `{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "baseUrl": "src"
  },
  "include": ["src"],
  "exclude": ["dist"]
}`;

const gitignore = `node_modules
dist`;

module.exports = { packageJson, tsconfigJson, gitignore };
