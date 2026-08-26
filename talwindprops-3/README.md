# ⚛️ React Learning - Day 3

## 📝 Description

This is my **Day 3 React.js learning project**.
In Day 3, I learned **React Props, reusable components, component-based UI development, and Tailwind CSS with Vite**.

The main focus of this day was understanding how to create reusable React components and pass different data to them using **Props**.

---

## 📚 What I Learned

### 1. React Props

I learned what **Props (Properties)** are and why they are used in React.

Props allow a parent component to **pass data to a child component**.

```jsx
<HeroFeatures  username="Ragini Yadav"  btnText="Get Started"/>;
```

The value passed from the parent can be received inside the `HeroFeatures` component through `props`.

---

### 2. Passing Different Types of Data Through Props

I learned that Props can contain different types of JavaScript values, including:

* Strings
* Arrays
* Objects
* Variables
* Other JavaScript values

Example:

```jsx
<HeroFeatures
  channel="Chai aur Code"
  username="Ragini"
  items={[1, 2, 3]}
/>
```

---

### 3. Accessing Props

Props are received as an object inside the component.

```jsx
function HeroFeatures(props) {
  return <h1>{props.channel}</h1>;
}
```

A particular prop can be accessed using:

```jsx
props.channel
```

---

### 4. Props Destructuring

I learned that instead of repeatedly writing:

```jsx
props.username
props.channel
```

I can destructure the required values directly:

```jsx
function HeroFeatures({ username, channel }) {
  return (
    <h1>{channel}</h1>
  );
}
```

This makes the component code shorter and easier to read.

---

### 5. Default Values in Props

I learned how to provide a **default value** when a prop is not passed by the parent component.

```jsx
function HeroFeatures({ btnText = "Get started" }) {
  return <button>{btnText}</button>;
}
```

If `btnText` is provided, that value is used.

If it is not provided, `"Get started"` is used as the default value.

---

## ♻️ Reusable React Components

### 6. Creating Reusable Components

I learned how to take a UI section such as a **HeroFeatures** and convert it into a separate React component.

Instead of writing the same card multiple times, I can create:

```jsx
<HeroFeatures />
```

and reuse it wherever required.

This makes React applications:

* Reusable
* Maintainable
* Organized
* Easier to update

---

### 7. Passing Props to Reusable Components

A reusable component becomes more useful when different values can be passed to it.

```jsx
<HeroFeatures
  channel="Chai aur Code"
  buttonText="Get started"
/>

<HeroFeatures
  channel="React Learning"
  buttonText="Click Me"
/>
```

The same `HeroFeatures` component can display different information depending on the Props it receives.

---

# 🎨 Tailwind CSS

### 8. What is Tailwind CSS?

I learned that **Tailwind CSS is a utility-first CSS framework**.

Instead of writing separate CSS rules for every design, Tailwind provides utility classes that can be directly used in JSX.

Examples:

```jsx
bg-green-400
p-4
text-center
rounded
flex
```

---

### 9. Configuring Tailwind CSS with Vite + React

I learned how to configure Tailwind CSS in a React project created with **Vite**.

The basic process was:

1. Create/open the Vite React project.
2. Install the required Tailwind CSS dependencies.
3. Configure Tailwind with the Vite project.
4. Add the required Tailwind configuration/import.
5. Run the project using the development server.
6. Test Tailwind classes inside a React component.

---

### 10. Testing Tailwind CSS

I learned how to check whether Tailwind CSS is working correctly.

Example:

```jsx
<h1 className="bg-green-400 text-center p-4">
  Tailwind Test
</h1>
```

If the background, alignment and padding are applied, Tailwind is working correctly.

---


# ⚛️ React Component Concepts

### 12. Creating a Components Folder

I learned how to organize reusable components in a separate folder.

```text
src/
├── components/
│   └── Card.jsx
├── App.jsx
└── main.jsx
```

This keeps the project organized as more components are created.

---

### 13. Creating a Functional Component

I learned how to create a React functional component.

```jsx
function HeroFeatures() {
  return (
    <div>
      Card Component
    </div>
  );
}

export default HeroFeatures;
```

---

### 14. Importing and Reusing Components

A component can be imported into `App.jsx` and reused.

```jsx
import HeroFeatures from "./components/Card";

function App() {
  return (
    <>
      <HeroFeatures />
      <HeroFeatures />
    </>
  );
}

export default App;
```

This allows the same component to be rendered multiple times.

---

# 🔄 Parent → Child Data Flow

The basic flow I learned is:

```text
Parent Component
       ↓
     Props
       ↓
Child Component
       ↓
Uses the received data
```

Example:

```jsx
<HeroFeatures channel="Chai aur Code" />
```

The `HeroFeatures` component receives `"Chai aur Code"` through Props.

---

# 🧠 Reusable Component + Props

The combination of **Components + Props** makes React UI reusable.

```text
Create Component
       ↓
Make it Reusable
       ↓
Pass Different Props
       ↓
Same Component
Different Data
```

This is useful for creating:

* Product Cards
* User Cards
* Profile Cards
* Buttons
* Other reusable UI elements

---

# 🛠️ Technologies Used

* React.js
* JavaScript
* JSX
* Vite
* Tailwind CSS
* HTML/CSS

---

# 📌 Key Takeaways

From Day 3, I learned:

* What React Props are
* Why Props are used
* How to pass data from parent to child
* How to receive Props inside a component
* How to access Props using `props.property`
* Props destructuring
* Passing strings, arrays, objects and variables through Props
* Creating reusable components
* Importing and reusing components
* Providing default values for Props
* Using `className` in JSX
* What Tailwind CSS is
* Tailwind's utility-first approach
* Configuring Tailwind CSS with Vite
* Testing Tailwind CSS in React
* Using Tailwind utility classes
* Organizing React components

---

# 🎯 Day 3 Outcome

By the end of Day 3, I understood the basic concept of building **reusable React components and making them dynamic using Props**.

I also learned how to use **Tailwind CSS with Vite** and practiced styling React components using utility classes.

The next step is to apply these concepts through **React projects** and continue learning through practical implementation.

---

## 🚀 Learning Progress

| Day       | Topics                                        |
| --------- | --------------------------------------------- |
| Day 1     | React Fundamentals                            |
| Day 2     | React Hooks and Component Concepts            |
| **Day 3** | **Props, Reusable Components & Tailwind CSS** |

---

⭐ **Day 3 completed — continuing my React learning journey!**




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
