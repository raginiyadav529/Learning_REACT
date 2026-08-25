# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React Demo 1 — React Learning (Day 1)

This is my **Day 1 React.js learning project**.

I created this project to understand the basic setup of React using **Vite** and to get familiar with the React development environment.
For this first project, I created a simple page that displays text using an `<h1>` element.

## 📚 What I Learned

During Day 1, I learned:

- What React.js is
- How to create a React project using Vite
- How to create a React application using JavaScript
- Basic React project structure
- How `npm` is used in a React project
- How to install project dependencies using `npm install`
- How to start the React development server using `npm run dev`
- How the React application runs locally in the browser
- Basic understanding of React components
- How to display content using JSX
- Basic use of an `<h1>` element in JSX(JavaScript XML.)
- Basic understanding of `package.json`
- The purpose of `node_modules`

## About Toggle Button ******\*\*\*******

## 1. Toggle Concept

I learned how to create ON/OFF behavior using state.

const [isOn, setIsOn] = useState(false);

And:

setIsOn(!isOn);

The ! changes the current value to its opposite:

false → true
true → false

This helped me understand how React can control UI behavior based on state.

## 2. Conditional Styling

I learned how to change CSS classes according to the state.

className={`toggle ${isOn ? "on" : "off"}`}

This means:

isOn = true → on
isOn = false → off

I also used CSS transitions to make the UI changes smoother.

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript
- HTML / JSX
- CSS
- npm
- VS Code

## 💻 Project Setup

The project was created using Vite:

```bash
npm create vite@latest react-demo-1
```

Selected options:

```text
Framework: React
Variant: JavaScript
Linter: ESLint
```

## ▶️ How to Run the Project

Go to the project directory:

```bash
cd react-demo-1
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available on the local development URL provided by Vite, for example:

```text
http://localhost:5173/
```

## ⚠️ Problems I Faced

While creating this project, I faced a few issues and learned from them.

### 1. Create React App is deprecated

Initially, I tried:

```bash
npx create-react-app React-Demo-1
```

I learned that **Create React App is deprecated**, so I decided to use **Vite**, which is the recommended modern build tool for my learning project.

### 2. Project naming restriction

I initially used:

```text
React-Demo-1
```

This caused an npm naming error because npm package/project names cannot contain capital letters.

I changed the project name to:

```text
react-demo-1

```

## 🎯 Purpose of This Project

This is **not a production application**.

It is my first step in learning React.js. The purpose of this project is to understand the React development environment and build a foundation before moving on to more advanced React concepts.

## 📈 Learning Progress

**Day 1 — React Basics**

Started learning React.js and successfully created my first React project using Vite.

> This project will be updated as I continue learning React and building more features.

## 👩‍💻 Author

    Ragini Yadav
