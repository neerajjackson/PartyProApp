import React from "react";
import "../css/Register.css"
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign up</h1>
        {/* <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div> */}
        <span>or use your email for registration</span>
        <input
        className="bg-gray-200 border-0 p-3 my-2 w-full"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
        className="bg-gray-200 border-0 p-3 my-2 w-full"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
        className="bg-gray-200 border-0 p-3 my-2 w-full"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="rounded-lg border border-solid border-red-600 bg-red-600 text-white text-xs font-bold py-3 px-12 uppercase tracking-wide transition duration-300 ease-in-out transform hover:scale-105">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
