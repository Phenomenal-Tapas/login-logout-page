import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import UserContext from "./components/context/UserContext";

function App() {
  const user = useContext(UserContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!user.isLoggedIn && <Login />}
        {user.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
