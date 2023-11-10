const ForgotPassword = () => {
  return (
    <main>
      <h3>Forgot password?</h3>
      <div className="card">
        <form>
          <fieldset>
            <label htmlFor="email">email</label>
            <input type="email" id="email" autoFocus />
            <p className="error">Valid email required</p>
          </fieldset>
          <button type="submit">Remember me!</button>
        </form>
      </div>
      <p>
        Already have an account? <span>Sign in</span>
      </p>
    </main>
  );
};

export default ForgotPassword;
