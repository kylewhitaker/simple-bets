import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import { User, View } from "./core";
import { Home, Landing, Login, Signup, Verify } from "./components";

function App() {
  const [view, setView] = useState<View>(View.Landing);
  const [email, setEmail] = useState<string>("");
  const [user] = useState<User>({ firstName: "Kyle" });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {view === View.Landing && <Landing setView={setView} />}
        {view === View.Signup && (
          <Signup setView={setView} setEmail={setEmail} />
        )}
        {view === View.Verify && <Verify setView={setView} email={email} />}
        {view === View.Login && <Login setView={setView} />}
        {view === View.Home && <Home user={user} setView={setView} />}
      </header>
    </div>
  );
}

export default App;
