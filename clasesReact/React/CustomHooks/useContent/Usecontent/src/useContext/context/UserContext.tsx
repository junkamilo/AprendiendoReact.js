import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";

type AuthStatus = 'checkin' | 'authenticated' | 'not-authenticated';

interface UserContentProps {
    autStatus: AuthStatus;
    user: User | null;
    isAuthenticated:boolean;

    Login: (UserID: number) => boolean;
    Logaout: () => void;
}

export const UserContext = createContext({} as UserContentProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {

    // 🔥 Los estados DEBEN estar dentro del componente
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checkin');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number) => {
        const foundUser = users.find(user => user.id === userId);

        if (!foundUser) {
            console.log(`User not found ${userId}`);
            setUser(null);
            setAuthStatus('not-authenticated');
            return false;
        }

        setUser(foundUser);
        setAuthStatus('authenticated');
        localStorage.setItem('userId',userId.toString());
        return true;
    };

    const handleLogout = () => {
        console.log('logout');
        setAuthStatus('not-authenticated');
        setUser(null);
    };

    useEffect(()=>{
        const storeId = localStorage.getItem('userId');
        if (storeId) {
            handleLogin(+storeId);
        }
    },[])

    return (
        <UserContext.Provider
            value={{
                autStatus: authStatus,
                isAuthenticated: authStatus === 'authenticated',
                user,
                Login: handleLogin,
                Logaout: handleLogout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
