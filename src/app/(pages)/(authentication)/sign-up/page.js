'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function RegistrationPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate input
        if (!name || !email || !password) {
            setError("All fields are required");
            return;
        }

        try {
            // Simulate a successful registration
            Swal.fire({
                icon: "success",
                title: "Registration Successful!",
                text: "Welcome to our platform!",
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                router.push('/dashboard');
            });
        } catch (err) {
            setError("Something went wrong, please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-4 text-center text-black">Register</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
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
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Create a password"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}
