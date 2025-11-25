import './LoginPage.css';

export const LoginPages = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">

      {/* Contenedor Principal (Tarjeta) */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-5xl w-full fade-in-up">

        {/* LADO IZQUIERDO: LOGIN */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Bienvenido</h3>
            <p className="text-gray-500 text-sm">Ingresa a tu cuenta para continuar</p>
          </div>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Correo electrónico"
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Contraseña"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              {/* Agregué un link de ejemplo que es común en logins */}
              <a href="#" className="hover:text-blue-600">¿Olvidaste tu contraseña?</a>
            </div>

            <div>
              <input
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 cursor-pointer transition duration-300 shadow-lg transform hover:-translate-y-1"
                value="Ingresar"
              />
            </div>
          </form>
        </div>

        {/* LADO DERECHO: REGISTRO */}
        <div className="w-full md:w-1/2 p-8 md:p-12 register-side-bg text-white flex flex-col justify-center">
          <div className="text-center mb-8 relative z-10">
            <h3 className="text-3xl font-bold mb-2">Crear Cuenta</h3>
            <p className="text-blue-100 text-sm">Únete a nosotros, es gratis y rápido</p>
          </div>

          <form className="space-y-4 relative z-10">
            <div>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-all backdrop-blur-sm"
                placeholder="Nombre completo"
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-all backdrop-blur-sm"
                placeholder="Correo electrónico"
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-all backdrop-blur-sm"
                placeholder="Contraseña"
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-all backdrop-blur-sm"
                placeholder="Confirmar contraseña"
              />
            </div>

            <div>
              <input
                type="submit"
                className="w-full bg-white text-blue-700 font-bold py-3 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-300 shadow-lg mt-4 transform hover:-translate-y-1"
                value="Registrarse"
              />
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}