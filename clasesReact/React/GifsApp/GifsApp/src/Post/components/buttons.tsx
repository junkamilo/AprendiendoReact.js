interface propstButton {
    text: string,
    onClick: () => void;
}

export const ButtonLike = ({ text,onClick  }: propstButton) => {
    return <button onClick={onClick}>{text}</button>;
};

export const ButtonDislike = ({text,onClick}:propstButton)=>{
    return <button onClick={onClick}>{text}</button>;
}