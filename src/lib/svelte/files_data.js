const packageJson = (repo_name, app_name) => `
{
  "name": "@${repo_name}/${app_name}",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "main": "dist/index.js",
  "svelte": "src/index.ts",
  "scripts":{
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "check": "svelte-check --tsconfig ./tsconfig.json"
  },
  "devDependencies": {
    "@rollup/plugin-commonjs": "^17.0.0",
    "@rollup/plugin-node-resolve": "^11.0.0",
    "rollup": "^2.3.4",
    "rollup-plugin-svelte": "^7.0.0",
    "svelte-check": "^2.0.0",
    "svelte-preprocess": "^4.0.0",
    "@rollup/plugin-typescript": "^8.0.0",
    "svelte": "^3.44.0",
    "tslib": "^2.3.1",
    "typescript": "^4.5.4",
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
  "include": ["src"]
}`;

const gitignore = `node_modules
dist`;

const rollupConfigJs = `import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/',
      format: 'es',
      sourcemap: true,
      chunkFileNames: '[name].js',
      manualChunks: { svelte: ['svelte'] },
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess({ sourceMap: true, typescript: { tsconfigFile: './tsconfig.json' } }),
        compilerOptions: { dev: true, customElement: true },
      }),
      resolve(),
      commonjs(),
      typescript(),
    ],
  },
];
`;

module.exports = { gitignore, packageJson, tsconfigJson, rollupConfigJs };
