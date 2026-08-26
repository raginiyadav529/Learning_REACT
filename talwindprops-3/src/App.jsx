import "./App.css";
import HeroFeatures from "./components/Card";

function App() {
  let myObj = [1, 2, 3];

  return (
    <>
      <h1
        className="bg-green-400 text-center p-3 hover:bg-pink-500 hover:text-white
     text-3xl font-bold text-blue-900"
      >
        Tailwind Test
      </h1>
      <HeroFeatures username="Ragini Yadav" btnText="Get Started" />;
      <HeroFeatures username="Modern Team" btnText="Learn more" />;
    </>
  );
}

export default App;
