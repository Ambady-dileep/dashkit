# ⚡ DashKit

A **real-world React dashboard** built to master React Hooks, Context API, and performance patterns.

> Not a tutorial clone. Not a toy app. A production-inspired mini-dashboard that teaches **why hooks exist** through actual pain points and their solutions.

---

## 🎯 Purpose

This project forces you to:
- ✅ Use `Context` correctly (no prop-drilling, no over-context)
- ✅ Fix performance issues with `React.memo`, `useMemo`, `useCallback`
- ✅ Manipulate DOM with `useRef` (focus, scroll, intervals)
- ✅ Understand when **NOT** to use state (controlled vs uncontrolled)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI library |
| **Vite** | Lightning-fast dev server |
| **Tailwind CSS** | Utility-first styling |
| **Flowbite** | Pre-built Tailwind components |
| **localStorage** | Theme + auth persistence |

---

## 🧩 Core Features

### 1️⃣ **Theme System** (Light/Dark)
- Global theme toggle via Context
- Persists on refresh
- Accessible from anywhere (Navbar, Settings)

### 2️⃣ **Auth Simulation**
- Fake login/logout (no backend)
- Protected routes
- Global user state via Context

### 3️⃣ **Performance Optimization**
- Expensive component with memoization
- Before/after re-render logging
- `React.memo`, `useCallback`, `useMemo` patterns

### 4️⃣ **DOM Manipulation**
- Auto-focus login input
- Scroll to section
- Interval management with `useRef`

### 5️⃣ **Form Patterns**
- Controlled form (profile edit)
- Uncontrolled input (search — performance optimization)

---

## 📂 Project Structure
```
src/
├── context/
│   ├── ThemeContext.jsx
│   └── AuthContext.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Dashboard.jsx
│   └── HeavyChart.jsx
├── hooks/
│   ├── useTheme.js
│   └── useAuth.js
├── pages/
│   ├── Login.jsx
│   └── Settings.jsx
└── App.jsx
```

---

## 🚀 Getting Started
```bash
# Install dependencies
npm install

# Install Tailwind + Flowbite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install flowbite flowbite-react

# Run dev server
npm run dev
```

---

## 📚 Learning Path

1. **Phase 1**: State & Re-renders  
2. **Phase 2**: Context API (global state)  
3. **Phase 3**: Performance traps & fixes  
4. **Phase 4**: `useRef` for DOM + memory  

---

## 🧠 What You'll Learn

- ❌ When **NOT** to use Context  
- ✅ How to structure multiple Contexts  
- 🔥 Why uncontrolled forms exist  
- ⚡ Preventing unnecessary re-renders  
- 🎯 Real-world hook patterns  

---

## 📝 License

MIT — Learn, break, rebuild.

---

## 💬 Notes

Built as a hands-on project to **feel the pain** before learning the solution.  
Not production-ready. Not meant to be. Meant to **teach**.