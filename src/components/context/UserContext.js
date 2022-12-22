import React from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}
});

export default UserContext;
