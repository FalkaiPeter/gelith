const packageJson = (repo_name, lib_name) => `{
  "name": "@${repo_name}/${lib_name}",
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
    "declaration": false
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}`;

const gitignore = `node_modules
dist`;

module.exports = { packageJson, tsconfigJson, gitignore };
