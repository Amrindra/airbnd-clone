import "../styles/Login.css";

const Login = ({ handleClick }) => {
  return (
    <div className="login-wrapper" onClick={handleClick}>
      <ul className="login-ul">
        <li className="signup">Sign up</li>
        <li>Log in</li>
        <hr />
        <li>Host your home</li>
        <li>Host your experience</li>
        <li>Help</li>
      </ul>
    </div>
  );
};

export default Login;
