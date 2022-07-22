const packageJSON = (name) =>
  `{
  "name": "${name}",
  "version": "0.0.0",
  "private": true,
  "license": "MIT",
  "scripts": {}
}`;
const gitignore = `node_modules
*.log
.env.*
*.lock`;

const workspace = `packages:
  - 'apps/*'
  - 'libs/*'`;

const tsconfig = `{
  "compilerOptions": {
    "strict": true,
    "declaration": true,
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "useDefineForClassFields": true,
    "skipLibCheck": true
  }
}`;

module.exports = { packageJSON, gitignore, workspace, tsconfig };
