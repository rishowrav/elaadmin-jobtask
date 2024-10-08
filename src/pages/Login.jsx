import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { authContext } from "../authProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginEmailPassword, googleLogin } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Login with Email and Password state
    loginEmailPassword(email, password)
      .then((userCredentials) => {
        toast.success("login successful");
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        setLoading(false);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    setLoading(true);
    googleLogin()
      .then((result) => {
        console.log(result);
        toast.success("Google login successful");
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Logo */}
        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold ">
          <img className="w-32 mr-2" src="logo.webp" alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login in to your account
            </h1>

            {/* Login From */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <div>
                <button
                  disabled={loading}
                  className="btn btn-accent w-full disabled:text-white"
                  type="submit"
                >
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>
            </form>

            <hr />
            <div>
              <button
                disabled={loading}
                className="btn w-full"
                onClick={handleGoogleLogin}
              >
                {loading ? (
                  "Loading..."
                ) : (
                  <span className="flex items-center gap-2">
                    <FcGoogle className="text-xl" />{" "}
                    <span>Log in with Google</span>
                  </span>
                )}
              </button>
            </div>

            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?{" "}
              <Link
                className="font-medium text-primary-600 hover:underline "
                to="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
