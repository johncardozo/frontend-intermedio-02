const SignIn = () => {
  return (
    <main>
      <h3>Sign In</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="email">email</label>
            <input type="email" id="email" autoFocus />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password</label>
            <input type="password" id="password" />
            <p className="error">Password is required</p>
          </fieldset>
          <button type="submit">login</button>
          <div className="forgot">Forgot password?</div>
        </form>
      </div>
      <p>
        Don&apos;t have an account? <span>Sign up</span>
      </p>
    </main>
  );
};

export default SignIn;
