import { use } from "react"
import { UserContext } from "../../context/UserContext";

export const ProfilePage = () => {
  const { user,Logaout } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Perfil Usuario</h1>
      <hr />
      <pre className="my-4">{JSON.stringify({user},null,2)}</pre>
      <button onClick={Logaout} >Salir</button>
    </div>
  )
}
