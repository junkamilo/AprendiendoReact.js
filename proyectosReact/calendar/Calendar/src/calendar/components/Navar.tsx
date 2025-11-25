export const Navar = () => {
  return (
    <div className="bg-slate-900 shadow-md w-full fixed top-0 left-0 z-50">

      {/* Contenedor interno para márgenes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* 1) LOGO + TEXTO */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            {/* Icono de Calendario (SVG) */}
            <span className="text-white bg-blue-600 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </span>

            <span className="text-white font-bold text-xl tracking-tight">
              Calendar
            </span>
          </div>

          {/* 2) BOTÓN SALIR */}
          <button className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-500 bg-transparent border border-red-500 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900">
            <span>Salir</span>
            {/* Icono de Salida (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
          </button>

        </div>
      </div>
    </div>)
}
