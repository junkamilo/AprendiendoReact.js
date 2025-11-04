interface Props {
    onLabelclick: (term:string)=>void;
    searches: string[];
    title:string;
}

export const PreviouSearches = ({ title, searches,onLabelclick }: Props) => {
    return (
        <div className="previous-searches">
            <h2>{title}</h2>
            <ul className="previous-searches-list">
                {searches.map((n, i) => (
                    <li key={i} onClick={() => onLabelclick(n)}>{n}</li>
                ))}

            </ul>
        </div>
    )
}
