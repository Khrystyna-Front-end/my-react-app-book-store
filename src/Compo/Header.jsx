import React from "react";

function Header() {
  return (
    <div className="header">
      <hr />
      <p className="header-text">X-course task | Прізвище, ім'я</p>
      <hr />
    </div>
  );
}

export default Header;

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
