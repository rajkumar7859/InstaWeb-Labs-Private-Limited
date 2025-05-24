# React + Vite

# 🧱 Drag-and-Drop Website Builder (React + TailwindCSS)

A modern, responsive **drag-and-drop website builder prototype** that allows users to create page layouts visually and configure element properties using a familiar form-based interface.

> 🚀 Built with React, Tailwind CSS & LocalStorage – optimized for scalability and intuitive UX.

---
## Live Link
https://insta-web-labs-private-limited.vercel.app/

## ✨ Features

- 🔧 **Drag-and-Drop Interface** – Add, position, and organize `Text`, `Image`, and `Button` components easily.
- 🧩 **Element Property Configuration** – Use forms to edit each component (e.g., change text, image source, styles).
- 📱 **Responsive Layout** – Works seamlessly on desktop & mobile.
- 🌱 **Scalable Design** – Easily extend with new templates, element types, and layout options.
- 💾 **Local Storage** – Saves layout data persistently on the client side.
- 💻 **Modern Stack** – Built using React, TailwindCSS, and Context API for clean and modular code structure.

---

## 🖼️ Screenshots

| Canvas Interface | Element Configuration |
|------------------|------------------------|
| ![canvas](https://via.placeholder.com/400x250?text=Drag+and+Drop+Canvas) | ![form](https://via.placeholder.com/400x250?text=Property+Form) |

---

## 📁 Project Structure

src/
├── components/
│ ├── Sidebar.jsx # Element list to drag
│ ├── Canvas.jsx # Drop area for elements
│ ├── PropertyForm.jsx # Form to edit element properties
├── context/
│ └── BuilderContext.jsx # Global builder state
├── App.jsx # Main app container
└── index.js # Entry point

## 🧑‍💻 Tech Stack

- ⚛️ **React** – Component-based UI architecture
- 🎨 **Tailwind CSS** – Utility-first styling
- 📦 **LocalStorage** – Persistent state
- 🧠 **Context API** – Global state management
- ✨ **Framer Motion (optional)** – Smooth animations for element transitions

---