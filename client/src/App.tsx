import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import { User, View } from "./core";
import { Home, Landing, Login, Signup, Verify } from "./components";

function App() {
  const [view, setView] = useState<View>(View.Landing);
  const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  // TODO: check for authenticated user on app load

  // TODO: redirect views logged in/our

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {view === View.Landing && <Landing setView={setView} />}
        {view === View.Signup && (
          <Signup setView={setView} setEmail={setEmail} />
        )}
        {view === View.Verify && <Verify setView={setView} email={email} />}
        {view === View.Login && <Login setView={setView} setUser={setUser} />}
        {view === View.Home && (
          <Home setView={setView} setUser={setUser} user={user} />
        )}
      </header>
    </div>
  );
}

export default App;
