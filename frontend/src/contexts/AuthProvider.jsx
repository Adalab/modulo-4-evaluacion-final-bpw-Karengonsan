import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log("USUARIO", user);

    const saveUser = (userData) => setUser(userData);

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, saveUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Función para obtener los datos del contexto en los componentes
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}