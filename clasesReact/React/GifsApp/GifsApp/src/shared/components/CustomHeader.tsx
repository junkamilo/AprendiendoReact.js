interface Props {
    title: string;
    description?: string
}

export const CustomHeader = ({ title, description }: Props) => {
    return (
        //Header
        <div className="content-center">
            <h1>{title}</h1>
            {/**“Si description tiene un valor válido, entonces renderiza el <p>; si no, no muestres nada.” */}
            {description && <p>{description}</p>}
        </div>
    )
}
