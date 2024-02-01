import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import rightabstract from "../../assets/pictures/authpages/authbanner.png";
import Button from "../../components/Button/GlobalButton/Button";
import { signInSchema } from "../../constants/AuthSchema";
import { GoogleAuth } from "../../service/MilanApi";
import "./index.css";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const navigate = useNavigate();

  const handleGoogle = async () => {
    const response = await GoogleAuth();
    window.location.href = response;
  };

  const handleNavigatePages = () => {
    navigate(
      window.location.pathname.includes("signup")
        ? "/auth/login"
        : "/auth/signup",
    );
  };

  return (
    <div className="signup_parent">
      <div className="signup_container">
        <div className="signup_container_left">
          <h1>Login</h1>

          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="auth_form"
          >
            <div className="auth_element">
              <label className="auth_label">Email</label>
              <input
                type="email"
                {...register("email")}
                className="auth_input"
                placeholder="john@gmail.com"
              />
              {errors.email?.message && <p>{errors.email?.message}</p>}
            </div>

            <div className="auth_element">
              <label className="auth_label">Password</label>
              <input
                type="password"
                {...register("password")}
                className="auth_input"
                placeholder="********"
              />
              {errors.password?.message && <p>{errors.password?.message}</p>}
            </div>

            <Button type="submit" className="auth_submit">
              Sign Up
            </Button>

            <div className="signup_or">
              <hr />
              <span>OR</span>
              <hr />
            </div>

            <div className="signup_topbtn">
              <button
                className="btn authpage_topbtn"
                onClick={() => {
                  handleGoogle();
                }}
              >
                <FcGoogle style={{ fontSize: "18px", marginRight: "0.7rem" }} />
                Continue with Google
              </button>

              <button
                className="btn authpage_topbtn"
                onClick={() => {
                  handleNavigatePages();
                }}
                style={{
                  top: "20px",
                }}
              >
                {window.location.pathname.includes("signup")
                  ? "Have an account? Login"
                  : "New to Milan? Sign up"}
              </button>
            </div>
          </form>
        </div>

        <div className="signup_rightabstract">
          <div className="signup_topbtn">
            <button
              className="btn authpage_topbtn"
              onClick={() => {
                handleGoogle();
              }}
            >
              <FcGoogle style={{ fontSize: "18px", marginRight: "0.7rem" }} />
              Continue with Google
            </button>

            <button
              className="btn authpage_topbtn"
              onClick={() => {
                handleNavigatePages();
              }}
              style={{
                top: "20px",
              }}
            >
              {window.location.pathname.includes("signup")
                ? "Have an account? Login"
                : "New to Milan? Sign up"}
            </button>
          </div>
          <img src={rightabstract} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
