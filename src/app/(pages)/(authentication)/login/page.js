'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate input
        if (!email || !password) {
            setError("Both fields are required");
            return;
        }

        try {
            Swal.fire({
                icon: "success",
                title: "Login Successful!",
                timer: 1500, // Dismiss after 2 seconds
                showConfirmButton: false // Hide the confirm button
            }).then(() => {
                // Redirect to login or dashboard after registration
                router.push('/dashboard');
            });
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <form 
                onSubmit={handleSubmit} 
                className="shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-sm bg-gray-100 dark:bg-gray-800"
            >
                <h2 className="text-2xl font-bold mb-4 text-center text-currentColor">Login</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 text-currentColor">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 text-currentColor">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}