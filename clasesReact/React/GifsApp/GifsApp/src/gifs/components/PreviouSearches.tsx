interface Props {
    title: string;
    name: string[];
}

export const PreviouSearches = ({ title, name }: Props) => {
    return (
        <div className="previous-searches">
            <h2>{title}</h2>
            <ul className="previous-searches-list">
                {name.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}

            </ul>
        </div>
    )
}
