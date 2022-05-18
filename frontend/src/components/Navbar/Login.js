import { useContext } from "react"
import SignUp from "./SignUp";
import axios from "axios";
import { userContext } from "../../providers/AuthProvider";


export default function Login(props) {
  const { user, setUser, logout, onSubmitLoginForm } = useContext(userContext);

   // get user's favorite recipes control
   const getUserFavorite = async (event) => {
    event.preventDefault();
    if (user.user_id) {
      axios.get(`http://localhost:8080/favorite/${user.user_id}`)
      .then((response) => {
        console.log(response.data)
      });
    } 
  };


  if (user.activeUser && !user.error) {
    return (
      <>
        <h5> What's sup {user.name}</h5>
        <button onClick={logout}>Logout</button>
        <button onClick={ getUserFavorite } >MyFavorite</button>
      </>
    )
  } else {
    return (
      <>
        <form onSubmit={ onSubmitLoginForm}>
          <input
            type="text"
            className="form-control"
            placeholder="enter email"
            onChange={e => (setUser(prev => ({ ...prev, email: e.target.value })))}
          />
          <input
            type="password"
            autoComplete="on"
            className="form-control"
            placeholder="enter password"
            onChange={e => (setUser(prev => ({ ...prev, password: e.target.value })))}
          />
          <button>Login</button>
          {props.mode != "SignUp" && <button onClick={() => props.setMode("SignUp")}>SignUp</button>}
          <h6>{user.error}</h6>
        </form>
        {props.mode == "SignUp" && <SignUp user={user} setUser={setUser} mode={props.mode} setMode={props.setMode}></SignUp>}
      </>
    )
  }
}