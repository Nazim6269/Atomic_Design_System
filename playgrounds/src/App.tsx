import { Button } from "@design_system/react/lib";

function App() {
  return (
    <>
      <h1>Hello Monorepo</h1>
      <Button onClick={() => alert("hello")} title="I am a Button">
        click Me
      </Button>
    </>
  );
}

export default App;
