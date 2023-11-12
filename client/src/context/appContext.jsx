import { createContext, useContext, useState, useEffect } from "react";
import customFetch from "../utilits/customFetch";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [redirect, setRedirect] = useState("");
  const [user, setUser] = useState(null);

  const loginTestUser = async () => {
    try {
      const {
        data: { user },
      } = await customFetch.post("/auth/login", {
        email: "test@gmail.com",
        password: "test1234",
      });
      changeUser(user);
    } catch (error) {
      throw {
        status: error.response.status,
        message: error.response.data.msg,
      };
    }
  };

  const addToLove = async (placeId) => {
    try {
      await customFetch(`/user/add-to-love/${placeId}`);
      await getUserInfo();
    } catch (error) {
      throw {
        status: error.response.status,
        message: error.response.data.msg,
      };
    }
  };

  const removeLove = async (placeId) => {
    try {
      await customFetch(`/user/remove-love/${placeId}`);
      await getUserInfo();
    } catch (error) {
      throw {
        status: error.response.status,
        message: error.response.data.msg,
      };
    }
  };

  const checkIsMyFav = (placeId) => {
    return user?.myFavs?.includes(placeId);
  };

  const changeUser = (newUser) => {
    setUser(newUser);
  };

  const logout = async () => {
    try {
      await customFetch("/auth/logout");
      changeUser(null);
    } catch (error) {
      throw {
        status: error.response.status,
        message: error.response.data.msg,
      };
    }
  };

  const getUserInfo = async () => {
    try {
      const data = await customFetch.get("/user/get-current-user");
      setUser(data.data.user);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (!user) {
      getUserInfo();
    }
  }, []);

  const contextValue = {
    user,
    changeUser,
    redirect,
    setRedirect,
    addToLove,
    removeLove,
    checkIsMyFav,
    logout,
    loginTestUser,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
