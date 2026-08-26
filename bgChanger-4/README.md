# 🎨 React Background Changer

## 📌 About the Project

This is a simple **React.js Background Changer project** that I built while learning React. The project allows users to change the background color of the webpage by clicking different color buttons.

The main purpose of this project was to understand how **React state, event handling, components, and dynamic styling** work together to create an interactive user interface.

## 🚀 Features

* 🎨 Change the background color dynamically
* 🖱️ Change colors using button clicks
* ⚛️ Built using React.js
* 🔄 Uses React `useState` for managing the selected color
* 📱 Simple and responsive UI
* 💻 Styled using CSS/Tailwind CSS

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6)**
* **Vite**
* **Tailwind CSS**
* **HTML5**
* **CSS3**
* **npm**

## 📚 What I Learned

While building this project, I learned and practiced:

* How to create a React project using **Vite**
* How React components work
* How to use the `useState` hook
* How to handle user events such as `onClick`
* How state changes cause React to re-render the UI
* How to dynamically change CSS properties using JavaScript/React
* How to create reusable buttons/components
* How to use Tailwind CSS for styling React components
* How React makes UI updates easier by managing application state

## ⚙️ How It Works

The project stores the currently selected background color in React state.

When the user clicks a color button:

1. The button's `onClick` event is triggered.
2. The selected color is passed to the state.
3. React updates the state using `setColor()`.
4. React re-renders the component.
5. The background color of the webpage changes automatically.

### Basic Flow

```text
User clicks color button
        ↓
onClick event
        ↓
setColor()
        ↓
React state updates
        ↓
Component re-renders
        ↓
Background color changes
```

## 📂 Project Structure

```text
bgChanger/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## ▶️ How to Run the Project

Clone or download the project and open it in VS Code.

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## 🎯 Purpose

This project is part of my **React.js learning journey**. I built it to strengthen my understanding of React fundamentals, especially **state management and user interaction**.

It is a small project, but it helped me understand an important React concept:

> **State controls the UI, and when state changes, React updates the UI automatically.**

## 🔮 Future Improvements

Some features that could be added in the future:

* Add a custom color picker
* Add gradient backgrounds
* Add dark/light mode
* Display the selected color name or HEX value
* Add a reset button

## 👨‍💻 Learning Progress

This project helped me move from understanding basic React concepts to actually **building an interactive React application** using state and events.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
