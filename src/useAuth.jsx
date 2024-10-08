import { useEffect, useState, useContext, createContext } from "react";
import { auth } from "./firebase"; // Firebase auth config
import { onAuthStateChanged } from "firebase/auth";

// Create Context for Authentication
const AuthContext = createContext();

// Provide the authentication state to components
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe; // Unsubscribe from the listener on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);
