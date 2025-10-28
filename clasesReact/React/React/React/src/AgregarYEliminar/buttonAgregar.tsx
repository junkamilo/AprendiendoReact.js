interface ButtonAgregarProps {
    description: string;
    id: number;
    onClick: (id: number) => void;
}

export const ButtonAgregar = ({ description, id, onClick }: ButtonAgregarProps) => {
    return (
        <button className="btn" onClick={() => onClick(id)}>
            {description}
        </button>
    );
};
