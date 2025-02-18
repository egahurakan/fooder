"use client";

import Image from "next/image";
import { useState } from "react";
import img from "@/public/image/menu/1.png";
import img2 from "@/public/image/menu/2.png";
import img3 from "@/public/image/menu/3.png";
import img4 from "@/public/image/menu/4.png";
import img5 from "@/public/image/menu/5.png";
import img6 from "@/public/image/menu/6.jpeg";
import img7 from "@/public/image/menu/7.jpeg";
import img8 from "@/public/image/menu/8.jpeg";
import img9 from "@/public/image/menu/9.jpeg";
import img10 from "@/public/image/menu/10.jpeg";
import img11 from "@/public/image/menu/11.jpeg";
import img12 from "@/public/image/menu/12.jpeg";

const menuItems = [
    { id: "1", name: "Latte", price: 20000, img: img },
    { id: "2", name: "Spagetti", price: 20000, img: img2 },
    { id: "3", name: "Kentang Goreng", price: 20000, img: img3 },
    { id: "4", name: "Nasi Goreng", price: 20000, img: img4 },
    { id: "5", name: "Beef Steak", price: 20000, img: img5 },
    { id: "6", name: "Martabak Mini", price: 20000, img: img6 },
    { id: "7", name: "Mini Udon", price: 20000, img: img7 },
    { id: "8", name: "Cireng", price: 20000, img: img8 },
    { id: "9", name: "Pancake", price: 20000, img: img9 },
    { id: "10", name: "Croissant", price: 20000, img: img10 },
    { id: "11", name: "Siomay", price: 20000, img: img11 },
    { id: "12", name: "Tempura Udang", price: 20000, img: img12 },
];

const DashboardPage = () => {
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

    const increaseQuantity = (id: string) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };

    const decreaseQuantity = (id: string) => {
        setQuantities((prev) => {
            if (!prev[id] || prev[id] === 0) return prev;
            const updated = { ...prev };
            updated[id] -= 1;
            if (updated[id] === 0) delete updated[id];
            return updated;
        });
    };

    const handleOrder = () => {
        const orderedItems = menuItems.filter((item) => quantities[item.id]);
        if (orderedItems.length === 0) {
            alert("Silakan pilih menu terlebih dahulu.");
            return;
        }

        const totalPrice = orderedItems.reduce((acc, item) => acc + (quantities[item.id] || 0) * item.price, 0);
        const orderSummary = orderedItems
            .map((item) => `${item.name} x${quantities[item.id]}`)
            .join("\n");

        alert(`Pesanan Anda:\n${orderSummary}\nTotal: IDR ${totalPrice.toLocaleString()}`);

        setQuantities({});
    };

    const orderedItems = menuItems.filter((item) => quantities[item.id]);
    const totalPrice = orderedItems.reduce((acc, item) => acc + (quantities[item.id] || 0) * item.price, 0);

    return (
        <section className="bg-secondary min-h-dvh text-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#c09363]">Menu <span className="text-white">Kami</span></h2>
                <p className="text-gray-400 mt-2 max-w-md mx-auto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quisquam corrupti dolore.
                </p>

                <div className="flex justify-center gap-8 mt-8 flex-wrap">
                    {menuItems.map((item) => (
                        <div key={item.id} className="text-center">
                            <div className="w-[200px] h-[200px] rounded-full overflow-hidden mx-auto border-4 border-gray-600">
                                <Image src={item.img} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="mt-4 font-semibold text-lg">- {item.name} -</h3>
                            <p className="text-gray-400">IDR {item.price.toLocaleString()}</p>
                            <div className="flex justify-center items-center gap-4 mt-2">
                                <button
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="px-3 py-2 bg-gray-300 text-black font-bold rounded-lg"
                                >
                                    -
                                </button>
                                <span className="text-lg font-bold">{quantities[item.id] || 0}</span>
                                <button
                                    onClick={() => increaseQuantity(item.id)}
                                    className="px-3 py-2 bg-blue-500 text-white font-bold rounded-lg"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {orderedItems.length > 0 && (
                    <div className="bg-gray-800 p-4 rounded-lg mt-6 mx-auto max-w-md">
                        <h3 className="text-lg font-bold text-white">Detail Transaksi</h3>
                        <ul className="text-gray-300 mt-2 text-left">
                            {orderedItems.map((item) => (
                                <li key={item.id} className="flex justify-between">
                                    <span>{item.name} x{quantities[item.id]}</span>
                                    <span>IDR {(quantities[item.id] || 0) * item.price}</span>
                                </li>
                            ))}
                        </ul>
                        <hr className="my-2 border-gray-600" />
                        <p className="text-lg font-bold text-white flex justify-between">
                            <span>Total:</span>
                            <span>IDR {totalPrice.toLocaleString()}</span>
                        </p>
                    </div>
                )}

                {orderedItems.length > 0 && (
                    <div className="text-center mt-4">
                        <button
                            onClick={handleOrder}
                            className="px-6 py-3 bg-green-500 text-white text-lg font-bold rounded-lg shadow-lg"
                        >
                            Pesan Sekarang
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DashboardPage;
