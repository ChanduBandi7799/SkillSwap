// authActions.js

export const loginUser = async (dispatch, payload) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    const res = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok) {
      const { username, token } = data;

      // Store in localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);

      dispatch({ type: "LOGIN_SUCCESS", payload: { username, token } });
      return { username, token }; // Return for potential navigation
    } else {
      dispatch({ type: "LOGIN_ERROR", payload: data.error || "Login failed" });
        return null; // Return null on error
    }
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error.message });
  }
};

export const signupUser = async (dispatch, payload) => {
  dispatch({ type: "SIGNUP_REQUEST" });

  try {
    const res = await fetch("http://localhost:4000/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok) {
      const { username, token } = data;

      // Store in localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);

      dispatch({ type: "SIGNUP_SUCCESS", payload: { username, token } });
      return { username, token }; // Return for potential navigation
    } else {
      dispatch({ type: "SIGNUP_ERROR", payload: data.error || "Signup failed" });
      return null; // Return null on error
    }
  } catch (error) {
    dispatch({ type: "SIGNUP_ERROR", payload: error.message });
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem("username");
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};
