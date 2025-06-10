import { login as loginApi } from "../services/LoginApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function useLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async ({ email, password }) => {
        try {
            setIsLoading(true);
            const response = await loginApi({ email, password });
            // Firebase auth state will be handled by ProtectedRoute
            navigate("/admin", { replace: true });
            return response;
        } catch (err) {
            console.log("ERROR", err);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading };
}