<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# health-app -->

# Project Health App: React + TypeScript + Vite

## Account login

- email: demo@health.app
- password: demo1234

## Technologies

- Language: TypeScript, HTML, CSS
- JavaScript framework: [React.js]
- UI framework: [Stylex](https://stylexjs.com//)
- Architecture: Single Page Application
- Apply SOLID principles

## Project Structure

````bash
src
├── assets              → Uncompiled images, svg
├── components          → React components
├── containers          → Application page component
├── hooks               → custom hook logic and data
├── pages               → Application views
├── routes              → Application route
├── store               → State management
├── theme               → Global token stylex
├── types               → TypeScript types
├── utils               → Common function

## Setup

Requirements:

- Node v18.x
- Yarn v1.22.x

Install dependencies:

```bash
$ yarn install
````
