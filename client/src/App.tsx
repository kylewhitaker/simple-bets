import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import { User, View } from "./core";
import { Home, Landing, Login, Signup } from "./components";

function App() {
  const [view, setView] = useState<View>(View.Landing);
  const [user] = useState<User>({ firstName: "Kyle" });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {view === View.Landing && <Landing setView={setView} />}
        {view === View.Signup && <Signup setView={setView} />}
        {view === View.Login && <Login setView={setView} />}
        {view === View.Home && <Home user={user} setView={setView} />}
      </header>
    </div>
  );
}

export default App;
