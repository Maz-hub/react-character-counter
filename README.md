# Character Counter App

A small React + Tailwind CSS v4 project built to practice responsive design, theme switching (light/dark), and custom design tokens.

---

## 🛠️ Tech Stack

- **React** (with Vite)
- **Tailwind CSS v4**
- **Custom tokens** defined in `@theme`
- **Typography presets** built as reusable utilities

---

## 🎨 Design System

All colors, fonts, and background images are defined in `index.css` under `@theme`.  
Typography is defined as custom utilities, example:

```css
@utility text-preset-1 {
  font-family: var(--font-sans);
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -1px;
  font-size: 64px;
}

@utility text-preset-1-mobile {
  font-family: var(--font-sans);
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -1px;
  font-size: 40px;
}
```

## Note on Tailwind v4 and Custom Classes

In Tailwind v4, responsive prefixes (sm:, md:, etc.) don’t work with classes defined in @layer base.

👉 To make a custom class behave like a real utility (and support responsive prefixes, hover, dark mode, etc.), define it in @utility instead.
