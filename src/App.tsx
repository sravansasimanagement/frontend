import  {SignUp}  from "./features/signup/signUp";
import  {Success}  from "./features/success/success";
import { useSelector } from 'react-redux';


function App() {
  const status = useSelector((state: any) => state.user.save.status);
  return (
    <>
      <div className="container is-max-desktop">
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', backgroundColor: "#ffff"}}>
       {status === 'success' ? <Success/> :<SignUp /> }
       </div>
      </div>
    </>
  );
}

export default App;
