# React Learning – Day 2

## 📚 What I Learned

Today I learned about **React Hooks** and why they are needed in functional components.

### 1. React Hooks

Hooks are special functions provided by React that allow functional components to use features such as **state** and other React functionality.

The main Hook I practiced today was:

```jsx
useState()
```

### 2. useState

I learned that `useState` is used when a component needs to **remember a value that can change**.

Example:

```jsx
const [counter, setCounter] = useState(0);
```

Here:

* `counter` → stores the current value.
* `setCounter` → updates the value.
* `0` → initial value.

I also learned that the two values inside `[]` are obtained using **array destructuring**.

### 3. Updating State

I learned that we should use the state setter function to change state.

For example:

```jsx
setCounter(counter + 1);
```

When the state changes, React re-renders the component and updates the UI.

---

## 💡 What I Understood

Today I understood that **state is used for values that can change during the lifetime of a React component**.

The basic flow I understood is:

```text
User Interaction
       ↓
Event Handler
       ↓
State Setter
       ↓
State Changes
       ↓
React Re-renders
       ↓
UI Updates
```

For example:

```text
Click Button
     ↓
setCounter()
     ↓
counter changes
     ↓
React re-renders
     ↓
New counter value appears
```

I also understood the difference between a normal JavaScript variable and React state. A normal variable does not automatically tell React to update the UI, while updating state using its setter function causes React to re-render the component.

---

## 🛠️ What I Implemented

I implemented the concepts I learned in my Day 2 React project.

### Counter

I created a counter that increases when the button is clicked.

```jsx
const [counter, setCounter] = useState(0);
```

I used an event handler to update the counter.

### CSS Styling

I practiced:

* `className`
* Conditional classes
* `width`
* `height`
* `background-color`
* `border-radius`
* `transform`
* `transition`
* Creating smaller containers using `width`

---

## 🔑 Key Concepts Practiced

* React Hooks
* `useState`
* State and state updates
* Array destructuring
* Event handling
* `onClick`
* Conditional rendering/styling
* CSS transitions
* React components
* Importing CSS files
* Exporting components

---

## 🎯 Day 2 Outcome

By the end of Day 2, I understood how **React state connects user actions with UI changes**.

I didn't just learn `useState` theoretically—I implemented it through a **counter, toggle button, and heart interaction**, which helped me understand how state works in a real React component.

### Learning Flow

```text
React Component
      ↓
useState
      ↓
Store State
      ↓
User Interaction
      ↓
Update State
      ↓
React Re-render
      ↓
Updated UI
```

## 🚀 Next Step

Continue learning React by practicing:

* More Hooks
* Props
* Component communication
* Conditional rendering
* Lists and keys
* Forms
* API integration




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
