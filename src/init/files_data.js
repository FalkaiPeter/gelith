const packageJson = (name) => `{
  "name": "${name}",
  "private": true,
  "workspaces": [
    "apps/*",
    "libs/*"
  ],
  "scripts": {
    "start": "lerna run start --scope '{}' --parallel",
    "build": "lerna run build --scope '{}'"
  },
  "devDependencies": {
    "lerna": "^4.0.0",
    "prettier": "^2.6.1"
  }
}`;

const lernaJson = `{
  "packages": ["apps/*, libs/*"],
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true
}`;

const prettierRc = `{
  "printWidth": 120,
  "bracketSameLine": true
}`;

const gitignore = `node_modules
*.lock`;

const tsconfigBaseJson = `{
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "module": "ESNext",
    "declaration": true,
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowJs": false,
    "sourceMap": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "useDefineForClassFields": true,
    "skipLibCheck": true
  }
}`;

module.exports = { packageJson, gitignore, lernaJson, prettierRc, tsconfigBaseJson };
