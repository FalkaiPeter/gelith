const packageJson = (repo_name, lib_name) => `
{
  "name": "@${repo_name}/${lib_name}",
  "private": true,
  "version": "0.0.1",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "start": "tsc -w && tsc-alias -w",
    "build": "tsc && tsc-alias"
  },
  "peerDependencies": {
    "ract-dom": "*",
    "react": "*"
  },
  "devDependencies": {
    "@types/react": "*",
    "@types/react-dom": "*",
    "tsc-alias": "^1.6.7",
    "typescript": "*"
  }
}
`;

const tsconfigJson = `{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "module": "ESNext",
    "outDir": "dist",
    "rootDir": "src",
    "baseUrl": "src"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}`;

const gitignore = `node_modules
dist`;

module.exports = { gitignore, packageJson, tsconfigJson };
