import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import UserStore from "../store/UserStore";

const AuthPage = observer(() => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="page">
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <div className="auth-container">
        <AuthForm isLogin={isLogin} />
        {isLogin ? (
          <p>
            Don't have an account yet?{" "}
            <span onClick={() => setIsLogin(false)} className="highlight">
              Signup
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setIsLogin(true)} className="highlight">
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  );
});

export default AuthPage;