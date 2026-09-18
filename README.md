# Dev Stack
Dev Stack is an interactive React application for exploring modern development technologies and building a personalized technology stack.

Repository: [github.com/SabikunEthika/Dev_Stack_PH](https://github.com/SabikunEthika/Dev_Stack_PH)

## Description

The application presents a curated set of frontend, backend, database, language, styling, and DevOps technologies. Each technology includes its category, rating, difficulty level, badge, icon, and a short description. Users can select technologies, review their stack, remove individual choices, or clear the full selection.

## Technologies Used

- React 19 with TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React-Toastify
- Lucide React
- JSON data
- Git and GitHub

## Features

1. **Technology Explorer**: Browse responsive technology cards with useful details and visual badges.
2. **Personal Stack Builder**: Add technologies, prevent duplicates, remove individual items, or remove the entire stack.
3. **Helpful User Feedback**: See loading states and toast notifications for successful, duplicate, and removal actions.

## Getting Started

### Prerequisites

- Node.js 16 or newer
- npm

### Installation

```bash
git clone https://github.com/SabikunEthika/Dev_Stack_PH.git
cd Dev_Stack_PH/dev-stack
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

```bash
npm run build
```

The project can be deployed to Netlify, Vercel, Cloudflare Pages, or another static hosting provider.

## Project Structure

```text
dev-stack/
└── src/
    ├── components/
    │   ├── sections/
    │   │   └── TechnologyExplorer.tsx
    │   ├── ui/
    │   │   └── LoadingSpinner.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── Navbar.tsx
    │   ├── TechnologiesGrid.tsx
    │   ├── TechnologyCard.tsx
    │   └── YourStack.tsx
    ├── data/
    │   └── technologies.json
    ├── hooks/
    │   └── useTechnologies.ts
    ├── utils/
    │   └── technologyStyles.ts
    ├── types/
    │   └── index.ts
    ├── App.tsx
    ├── App.css
    ├── index.css
    └── main.tsx
```

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like UI inside JavaScript or TypeScript. It makes React components easier to read and organize.

### 2. What is the difference between props and state?

Props are values passed from a parent component to a child. State is data managed inside a component that can change and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data in a component. This project uses it for the selected stack, loaded technologies, loading state, and mobile navigation state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. It loads the technology data once and updates the loading state when the data is ready.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify each list item and update only the item that changed. This project uses each technology's `id` as its key.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering displays different UI depending on a condition. The stack shows an empty message when no technology is selected:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <div>Display selected technologies</div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent passes data and callback functions as props. The child calls the callback when the user interacts with it, sending the selected technology back to the parent.

```tsx
<TechnologiesGrid selectedStack={selectedStack} onAdd={handleAddToStack} />
```
