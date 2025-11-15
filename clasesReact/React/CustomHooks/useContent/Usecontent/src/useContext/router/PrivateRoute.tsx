import { use, type JSX } from "react"
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router";

interface Props {
    element: JSX.Element,
}

export const PrivateRoute = ({ element }: Props) => {
    const { autStatus } = use(UserContext);
    if (autStatus === 'checkin') {
        return <div>Loading...</div>
    }
    if (autStatus === 'authenticated') {
        return element;
    }

    return <Navigate to="/login" replace></Navigate>
}
