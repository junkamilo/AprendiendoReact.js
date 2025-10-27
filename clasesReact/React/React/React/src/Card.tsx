import { ContentPrincipal } from "./ContentPrincipal";
import { LogoCard } from "./LogoCard";

export function Card(){
    return(
        <div className="Card-main">
            <LogoCard />
            <ContentPrincipal />
        </div>
    )
}