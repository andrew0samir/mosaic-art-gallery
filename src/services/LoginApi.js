import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";

export const login = async ({ email, password }) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        return {
            user: userCredential.user,
        };
    } catch (error) {
        throw new Error(error.message || "Failed to authenticate");
    }
};