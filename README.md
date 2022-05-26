# Gelith

### Simple generator tool for lerna based monorepos

## It has three commands only

- ### `init`
- ### `app`
- ### `lib`

## Basic folder structure

```
repo
 |_apps/
 |_libs/
 |_package.json
 |_tsconfig.base.json
 |_lerna.json
 |_.prettierrc
 |_.gitignore
```

## Currently three type of `lib` and `app` supported:

- `node` for util and backend packages
- `react`
- `svelte` (svelte lib for web component generations)
