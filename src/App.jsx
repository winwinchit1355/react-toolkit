import { useSelector,useDispatch } from "react-redux";
import { login,logout } from "./redux/loginReducer";

function App() {
  const loggedIn = useSelector(state => state.login);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{loggedIn.value ? 'Member':'Guest'}</h1>
      <button onClick={()=>dispatch(login(true))}>Login</button>
      <button onClick={()=>dispatch(logout(false))}>Logout</button>
    </>
  )
}

export default App
