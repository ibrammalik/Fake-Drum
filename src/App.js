import DrumMachine from "./components/DrumMachine";

function App() {
  return (
    <div className="h-screen flex items-center">
      <header></header>
      <div className="mx-auto">
        <DrumMachine />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
