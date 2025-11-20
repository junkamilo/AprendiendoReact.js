interface Props {
    title: string;
    description?: string
}

export const CustomJumbotron = ({ title, description }: Props) => {
    return (
        <div className="flex flex-col justify-center space-y-4 text-left">

            {/* TÍTULO: Efecto Gradiente y Tipografía Tight */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {/* El 'pb-2' es necesario para que el gradiente no se corte en la parte inferior de letras como 'g' o 'j' */}
                <span className="block bg-gradient-to-r from-slate-900 via-purple-900 to-slate-600 bg-clip-text text-transparent pb-2">
                    {title}
                </span>
            </h1>

            {/* DESCRIPCIÓN: Mejor legibilidad y contraste suave */}
            <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:text-xl">
                {description}
            </p>

        </div>
    )
}
