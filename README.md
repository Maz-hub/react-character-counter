# Character Counter App

A responsive **React + Tailwind CSS v4** mini project built as part of my learning journey.  
It analyzes text in real time: counting characters, words, and sentences and includes extra features like _Exclude Spaces_, _Set Character Limit_, and _Reading Time_ estimation.

This was a **Frontend Mentor** challenge I used to practice React logic, state flow, and controlled vs uncontrolled components.

---

## 🎯 What it does

- Users can type or paste text into the textarea and see live stats.
- The app displays:
  - Total characters, words, and sentences
  - Letter frequency (Letter Density)
  - Approximate reading time
- Optional features:
  - **Exclude Spaces:** toggles space counting
  - **Character Limit:** lets users set a limit and warns when it’s exceeded

---

## 🔧 Tech Used

- **React (Vite setup)**
- **Tailwind CSS v4** for styling and design tokens
- **Custom @theme** for colors, spacing, and typography
- **Frontend Mentor** Figma layout as reference

---

## 💡 Key Takeaways

- Practiced **`useRef`** for an uncontrolled textarea and direct DOM access.
- Used **`useState`** to manage multiple app states (text stats, toggles, inputs).
- Applied **`useEffect`** to recalculate counts when options changed.
- Learned how to build real-time text analysis logic using:
  - `.split()`, `.filter()`, `.replace()`, `.match()`
  - Regular expressions for words, sentences, and letters.
- Improved understanding of **conditional rendering** (`&&`) and dynamic styles in JSX.
- Built UI logic that reacts instantly to user actions without extra buttons.

---

## 🛠️ Design System

Tailwind tokens and utilities are defined under `@theme` in `index.css`.  
Typography presets (like `text-preset-1`, `text-preset-3`) were built as custom utilities to stay consistent across screen sizes.

> 💡 In Tailwind v4, custom utilities should be defined in `@utility` instead of `@layer base` — this allows responsive, hover, and dark mode variants to work correctly.

---

## 📁 Folder Structure

- **src/**
  - assets/
    - fonts/
    - images/
  - components/
    - CounterHeader.jsx 
    - StatCards.jsx 
    - StatLetters.jsx 
    - TextInputArea.jsx   
  - App.jsx
  - index.css

