interface propstButton {
    text: string,
    onClick: () => void;
}

export const ButtonLike = ({ text,onClick  }: propstButton) => {
    return <button onClick={onClick} className="buttonLike">{text}</button>;
};

export const ButtonDislike = ({text,onClick}:propstButton)=>{
    return <button onClick={onClick} className="buttonDislike">{text}</button>;
}

export const ButtonCompartir = ({text,onClick}:propstButton)=>{
    return <button onClick={onClick} className="buttonCompartir">{text}</button>;
}