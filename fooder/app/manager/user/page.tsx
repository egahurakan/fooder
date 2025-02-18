"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import img1 from "@/public/image/shincan.png";
import img2 from "@/public/image/shincan2.png";
import img3 from "@/public/image/shincan3.jpg";

interface User {
    id: number;
    name: string;
    role: "" | "Manager" | "Cashier"; // Izinkan string kosong
    rating: number;
    img: any;
}


const DashboardPage = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "Saul Goodman", role: "Manager", rating: 5, img: img1 },
        { id: 2, name: "Walter White", role: "Cashier", rating: 4, img: img2 },
        { id: 3, name: "Jesse Pinkman", role: "Manager", rating: 5, img: img3 },
    ]);

    const [editState, setEditState] = useState<{ id: number | null; name: string; role: "Manager" | "Cashier" | "" }>({ id: null, name: "", role: "" });

    const handleEdit = (user: User) => setEditState({ id: user.id, name: user.name, role: user.role });
    const handleSave = (id: number) => {
        setUsers(users.map(user => (user.id === id ? { ...user, name: editState.name, role: editState.role } : user)));
        setEditState({ id: null, name: "", role: "" });
    };
    const handleDelete = (id: number) => setUsers(users.filter(user => user.id !== id));

    return (
        <div className="bg-slate-900">
            <div className="flex flex-col items-center min-h-screen container p-4 space-y-8">
                <h1 className="text-4xl font-semibold text-white pt-10">
                    Meet Our <span className="text-primary">Team Members</span>
                </h1>
                {users.map(user => (
                    <div key={user.id} className="bg-slate-700 p-6 shadow-lg rounded-lg w-2/3 flex items-center space-x-4 ">
                        <div className="w-3/4 space-y-3">
                            {editState.id === user.id ? (
                                <>
                                    <input
                                        className="border p-2 w-full rounded mb-2"
                                        value={editState.name}
                                        onChange={(e) => setEditState({ ...editState, name: e.target.value })}
                                    />
                                    <select
                                        className="border p-2 w-full rounded"
                                        value={editState.role}
                                        onChange={(e) => setEditState({ ...editState, role: e.target.value as "Manager" | "Cashier" })}
                                    >
                                        <option value="Manager">Manager</option>
                                        <option value="Cashier">Cashier</option>
                                    </select>
                                </>
                            ) : (
                                <>
                                    <h3 className="mt-2 font-bold text-white">{user.name}</h3>
                                    <p className="text-gray-500 text-sm flex items-center">
                                        {user.role === "Manager" ? (
                                            <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Manager</span>
                                        ) : (
                                            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Cashier</span>
                                        )}
                                    </p>
                                </>
                            )}
                            <div className="flex text-yellow-500 mt-2">
                                {[...Array(user.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <div className="mt-3 space-x-2">
                                {editState.id === user.id ? (
                                    <button
                                        onClick={() => handleSave(user.id)}
                                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                                    >
                                        Edit
                                    </button>
                                )}
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <Image
                                src={user.img}
                                alt={`${user.name} profile`}
                                className="rounded-full object-cover"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
