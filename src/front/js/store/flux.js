const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      tokenLS: null,
      userRol: null,
      userEmail: null,
      userName: null,
      userLastName: null,
      userAdress: null,
      userGender: null,
      userPhone: null,
      userProfileImagen: null,
      posterImagen: null,
      competitions: [],
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
      getUser: async () => {
        const options = {
          method: "GET",
          headers: { Authorization: "Bearer " + getActions().getTokenLS() },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/user",
            options
          );
          const data = await resp.json();
          if (resp.status === 200) {
            setStore({
              userEmail: data.email,
              userName: data.name,
              userLastName: data.last_name,
              userAdress: data.adress,
              userGender: data.gender,
              userPhone: data.phone,
              userProfileImagen: data.profile_image,
            });
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeDataUser: async () => {
        const body = {
          name: userName,
          last_name: userLastName,
          adress: userAdress,
          gender: userGender,
          phone: userPhone,
        };
        const options = {
          method: "PUT",
          body: JSON.stringify(body),
          headers: { Authorization: "Bearer " + getActions().getTokenLS() },
        };

        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/user",
            options
          );
          return resp;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      deleteUser: async () => {
        const options = {
          method: "DELETE",
          headers: { Authorization: "Bearer " + getActions().getTokenLS() },
        };
        /*         try { */
        const resp = await fetch(
          process.env.BACKEND_URL + "/api/user",
          options
        );
        const data = await resp.json();
        if (resp.status === 200) {
          getActions.deleteTokenLS();
          return true;
        } else {
          return false;
        }
        /*         } catch (error) {
          console.log("Error loading message from backend", error);
        } */
      },

      deleteTokenLS: () => {
        setStore({ tokenLS: null });
      },
      getTokenLS: () => {
        return localStorage.getItem("token");
      },
    },
  };
};

export default getState;
