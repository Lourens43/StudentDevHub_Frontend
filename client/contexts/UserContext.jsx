import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(undefined);

function determineRole(email) {
  try {
    const adminListRaw = localStorage.getItem("studentdev_admin_emails");
    const admins = adminListRaw ? JSON.parse(adminListRaw) : [];
    if (email && admins.includes(email.toLowerCase())) return "admin";
  } catch {}
  if (email && /\+admin@/i.test(email)) return "admin";
  return "user";
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("studentdev_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        localStorage.removeItem("studentdev_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    const role = determineRole(userData?.email || "");
    const newUser = {
      ...userData,
      role,
      id: Date.now(),
      joinedAt: new Date().toISOString(),
    };
    setUser(newUser);
    localStorage.setItem("studentdev_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("studentdev_user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
