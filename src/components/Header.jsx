const Header = () => {
  return (
    <div className="header">
        <div className="nav">
            <button><img src="./images/backwards.svg" alt="backwards"/></button>
            <button><img src="./images/forwards.svg" alt="forwards"/></button>
        </div>
        <div className="buttons">
            <button id="sign">Sign up</button>
            <button id="log">Login</button>
        </div>
      </div>
  );
}

export default Header
