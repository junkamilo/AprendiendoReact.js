import { use } from "react"
import { Link } from "react-router"
import { UserContext } from "../../context/UserContext"

export const AboutPage = () => {
  const { isAuthenticated , Logaout } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Pagina sobre mi</h1>
      <hr />

      <div className="flex flex-col gap-2">
        {/* Perfil de usuario si tiene sesion */}
        {
          isAuthenticated && (
            <Link to="/profile">Perfil</Link>
          )
        }

        {/* login logout */}
        {isAuthenticated ? (
          <button onClick={Logaout}>Salir</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );

}
