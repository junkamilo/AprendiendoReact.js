import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { Login } = useContext(UserContext);
  const [userId, setUserId] = useState('')

  const navigation =  useNavigate();

  const handledSudmit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();

    const resolve = Login(+userId);
    console.log({resolve});

    if (!resolve) {
      console.error('Usuario no encontrado');
      return;
    }
    navigation('/profile');
    
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar sesion</h1>
      <hr />
      <form action="" className="flex flex-col gap-2 my-10"
      onSubmit={handledSudmit}>
        <input type="number" placeholder="id-usuario" 
        
        value={userId}
        onChange={event =>setUserId(event.target.value)}/>
        <button type="submit">
          login
        </button>

        <Link to='/about'>
        Volver a la pagina principal
        </Link>
      </form>
    </div>
  )
}
