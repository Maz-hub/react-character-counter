# Character Counter App

A responsive **React + Tailwind CSS v4** mini project.
The app analyzes text in real time - counting characters, words, and sentences — and includes optional tools like _Exclude Spaces_, _Set Character Limit_, and _Reading Time_ estimation.

This project is based on a **Frontend Mentor** challenge and was used to practice React fundamentals such as state flow, DOM interaction, and real-time logic updates.

---

## 🎯 What It Does

- Users can type or paste text into the textarea to see live statistics.
- Displays:
  - Total characters, words, and sentences
  - Letter frequency (Letter Density)
  - Approximate reading time
- Optional settings:
  - **Exclude Spaces:** toggles whether spaces are included in the count  
  - **Character Limit:** lets users define a limit and warns when exceeded
  - **Light / Dark Mode Toggle:** saves the user’s theme preference in `localStorage` and applies it automatically

---

## 🔧 Tech Used

- **React (Vite setup)**
- **Tailwind CSS v4** for layout, dark mode, and utility-based design
- **Custom `@theme` and `@utility`** for colors, tokens, and typography
- **Frontend Mentor** Figma layout for visual reference

---

## 💡 Key Takeaways

- Practiced **`useRef`** to handle an uncontrolled textarea and direct DOM access.
- Used **`useState`** to manage app states such as character count, toggles, and limits.
- Applied **`useEffect`** to trigger automatic recalculations and save theme preferences.
- Built reusable components that communicate through **props**.
- Used **conditional rendering** (`&&`) and **dynamic Tailwind classes** for live UI feedback.
- Implemented **Light / Dark mode** logic that toggles via a button and persists after refresh.

---

## 🛠️ Design System

All design tokens and utilities are defined under `@theme` in `index.css`.  
Typography presets (like `text-preset-1` and `text-preset-3`) are created using the new Tailwind v4 `@utility` directive for full variant support (`hover:`, `dark:`, etc.).

> In Tailwind CSS v4, custom text utilities must be defined inside `@utility` instead of `@layer base` to make responsive and state variants work correctly.


---

## 🌙 Theme Toggle Overview

The app uses a simple **`isDark` state** managed in `App.jsx`:
- The theme class (`.dark`) is toggled on the `<html>` element.
- The current theme is stored in `localStorage` so the user’s preference is remembered.
- The header buttons visually switch between sun and moon icons depending on the theme.

---

## ✅ Project Purpose

This project was built to strengthen:
- React state management and component composition
- Understanding of Tailwind CSS v4 theming and variants
- Creating accessible, responsive UI components
- Writing maintainable, well-documented frontend code



