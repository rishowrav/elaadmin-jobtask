import React from "react";

const Login = () => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold ">
          <img className="w-32 mr-2" src="logo.webp" alt="logo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="email" className="block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
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
                  required=""
                />
              </div>

              <div>
                <button className="btn btn-accent w-full" type="submit">
                  Login
                </button>
              </div>
            </form>

            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline "
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
