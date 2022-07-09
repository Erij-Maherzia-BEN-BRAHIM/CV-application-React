import { createContext, useState } from "react";

export const userCtx = createContext({
  isLogged:false,
  register: () => {},
  login: () => {},
  logout: () => {},

});

function AddNewUserContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function register(email, password) {
  
        let res=   fetch("/auth/register", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: { "Content-Type": "application/json" },
    })
    if (res.status === 401 || !res) {
        alert("Already used details, please use another email!");
        window.location.reload();

      } else if(res.status===201){
        alert("Registration Successfully!!");
      }
    }
  function login(email, password) {

   
  let res= fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: { "Content-Type": "application/json" },
    })
    if (res.status === 401 || !res) {
        alert("Invalid Credentials");
        window.location.reload();

      } else if(res.status===200){
        alert("Login Successfull");
      } 
}
function logout(){
    setIsLoggedIn(false);
}
  

  const context = {
    isLogged: isLoggedIn,
    register: register,
    login: login,
    logout: logout,
  
  };
  return (
    <userCtx.Provider value={context}>
      {props.children}
    </userCtx.Provider>
  );
}
export default AddNewUserContextProvider;
