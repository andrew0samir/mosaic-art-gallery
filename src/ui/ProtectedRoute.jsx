import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-config";
import Loader from "./Loader";


function ProtectedRoute({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, isLoading, navigate]);

    if (isLoading) {
        return (
            <div className="h-dvh bg-gray-50 flex justify-center items-center">
                <Loader />
            </div>
        );
    }

    return isAuthenticated ? children : null;
}

export default ProtectedRoute;