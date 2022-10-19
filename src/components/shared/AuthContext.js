import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      return JSON.parse(userProfle);
    }
    return null;
  });
  const navigate = useNavigate();
  const login = async (payload) => {
    await axios.post("http://localhost:4000/auth/login", payload, {
      withCredentials: true,
    });
    let apiResponse = await axios.get("http://localhost:4000/user-profile", {
      withCredentials: true,
    });
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    setUser(apiResponse.data);
    navigate("/");
  };

  const logout = async () => {
    await axios.get("http://localhost:4000/logout", { withCredentials: true });
    localStorage.removeItem("userProfile");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
