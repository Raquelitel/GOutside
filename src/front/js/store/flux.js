const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      tokenLS: null,
      userRol: null,
      profile_imagen: null,
    },
    actions: {
      signup: async (email, password1, password2) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password1: password1,
              password2: password2,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await resp.json();
          if (resp.status === 200) {
            localStorage.setItem("token", data.token);
            setStore({ tokenLS: data.token, userRol: data.rol });
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      login: async (email, password) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await resp.json();
          if (resp.status === 200) {
            localStorage.setItem("token", data.token);
            setStore({ tokenLS: data.token, userRol: data.rol });
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      deleteTokenLS: () => {
        setStore({ tokenLS: null });
      },
      /*       getTokenLS: () => {
        return localStorage.getItem("tokenLS");
      }, */
    },
  };
};

export default getState;
