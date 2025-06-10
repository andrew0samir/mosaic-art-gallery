import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import UseLogin from "../../hooks/UseLogin";

function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, isLoading } = UseLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login({ email, password });
        } catch (err) {
            setError(err.message || "Failed to sign in");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-500 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-lg text-white">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="mt-2 text-center text-3xl font-extrabold text-white">
                        Admin Dashboard
                    </h2>
                </div>

                {error && (
                    <div className="bg-red-500 text-white p-3 rounded-md mb-4">
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-500  mb-1"
                            >
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm placeholder-gray-400 "
                                placeholder="enter your email"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-500  mb-1"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm placeholder-gray-400 "
                                    placeholder="enter you password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                        <Eye className="h-5 w-5" aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="group">
                        <button
                            disabled={isLoading}
                            type="submit"
                            className={`w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                        >
                            {isLoading ? "Signing in..." : "Sign in"}
                            {!isLoading && (
                                <span className="mx-2">
                                    <LogIn
                                        className="h-5 w-5 text-primary-light group-hover:text-black"
                                        aria-hidden="true"
                                    />
                                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
