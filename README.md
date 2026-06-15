# My Portfolio - Monorepo

A monorepo containing the portfolio frontend and backend applications using npm workspaces.

## Project Structure

```
my-portfolio/
├── frontend/              # React + TypeScript + Vite frontend
├── backend/               # Backend API service
├── package.json           # Root workspace configuration
└── README.md
```

## Getting Started

### Installation

Install dependencies for all workspaces:

```bash
npm install
```

### Development

Run the frontend development server:

```bash
npm run dev:frontend
```

Run the backend development server:

```bash
npm run dev:backend
```

### Build

Build all packages:

```bash
npm run build
```

Build frontend only:

```bash
npm run build:frontend
```

Build backend only:

```bash
npm run build:backend
```

### Linting

Run linters across all workspaces:

```bash
npm run lint
```

## Workspace Details

### Frontend

- **Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Location**: `./frontend`
- **Commands**: `npm run dev -w frontend`, `npm run build -w frontend`

### Backend

- **Location**: `./backend`
- **Commands**: `npm run dev -w backend`, `npm run build -w backend`
- **Note**: Ready to be configured with your preferred framework (Express, Fastify, etc.)

## Working with Workspaces

Install a package in a specific workspace:

```bash
npm install <package-name> -w frontend
npm install <package-name> -w backend
```

Run a script in a specific workspace:

```bash
npm run <script-name> -w frontend
npm run <script-name> -w backend
```

Run a script in all workspaces:

```bash
npm run <script-name> --workspaces
```

{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
