# 🚀 Virtual Scroll List with Infinite Querying & Gallery Animation

A high-performance React application that renders **large product datasets efficiently** using **virtualization** and **infinite querying from TanStack**, while using the **Intersection Observer API only for gallery animation effects**.

This project is designed to solve real-world performance issues such as DOM overloading, scroll lag, and excessive re-renders when dealing with huge lists.

---

## 🧩 Project Architecture

| Feature | Technology |
|-------|------------|
| Virtual Scroll List | `useVirtualizer` – TanStack Virtual |
| Infinite API Fetching | `useInfiniteQuery` – TanStack Query |
| Gallery Animations | Raw `IntersectionObserver` |
| Rendering Strategy | DOM Virtualization |
| Styling | CSS Transitions |

---

## ✨ Key Features

♻️ **Infinite Querying with TanStack**  
Products are fetched page-by-page using `useInfiniteQuery`, eliminating large upfront data loads.

🧠 **DOM Virtualization Engine**  
`useVirtualizer` renders only the items visible in the viewport — even with thousands of products.

🖼️ **Scroll-Triggered Gallery Animations**  
Raw `IntersectionObserver` updates animation classes using `classList.add()` / `remove()`.

⚡ **Zero Scroll Event Listeners**  
All heavy scroll logic is replaced with browser-optimized APIs.

🛡️ **Memory-Safe Lifecycle Handling**  
Observers and query streams are disconnected cleanly to avoid leaks.

---



## ⚙️ How It Works

1. Initial product page loads using `useInfiniteQuery`.  
2. `useVirtualizer` calculates visible item range and renders only those nodes.  
3. As the user scrolls, virtualizer updates the visible slice dynamically.  
4. Gallery images use `IntersectionObserver` to toggle CSS classes for animations.  
5. When the end of the list is reached, `useInfiniteQuery` fetches the next API page.

---

## 📸 Preview

<img width="1485" height="1241" alt="image" src="https://github.com/user-attachments/assets/2dcad7fa-e24d-49c4-8789-deb5f56d9912" />

