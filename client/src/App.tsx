import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import { IS_PRIVATE, View } from "./core";
import { Home, Landing, Login, Signup, Verify } from "./components";
import { Auth } from "aws-amplify";

function App() {
  const [view, setView] = useState<View>(View.Landing);
  const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<string | null>(null);

  // check for authenticated user on app load
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log("user is logged in");
        setUser(user.username);
      })
      .catch(() => {
        console.log("nobody is logged in");
      });
  }, []);

  useEffect(() => {
    // redirect logged in users
    if (user && !IS_PRIVATE[view]) setView(View.Home);
    // redirect logged out users
    if (!user && IS_PRIVATE[view]) setView(View.Landing);
  }, [view, user]);

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
        {view === View.Home && <Home user={user} setView={setView} />}
      </header>
    </div>
  );
}

export default App;
