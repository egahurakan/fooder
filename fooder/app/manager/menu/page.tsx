"use client";

import Image from "next/image";
import img from"@/public/image/menu/1.png"
import img2 from"@/public/image/menu/2.png"
import img3 from"@/public/image/menu/3.png"
import img4 from"@/public/image/menu/4.png"
import img5 from"@/public/image/menu/5.png"
import img6 from"@/public/image/menu/6.jpeg"
import img7 from"@/public/image/menu/7.jpeg"
import img8 from"@/public/image/menu/8.jpeg"
import img9 from"@/public/image/menu/9.jpeg"
import img10 from"@/public/image/menu/10.jpeg"
import img11 from"@/public/image/menu/11.jpeg"
import img12 from"@/public/image/menu/12.jpeg"

const menuItems = [
    { name: "Latte", price: "IDR 20K", img: img},
    { name: "Spagetti", price: "IDR 20K", img: img2 },
    { name: "Kentang Goreng", price: "IDR 20K", img: img3 },
    { name: "Nasi Goreng", price: "IDR 20K", img: img4 },
    { name: "Beef Steak", price: "IDR 20K", img: img5 },
    { name: "Martabak Mini", price: "IDR 20K", img: img6 },
    { name: "Mini Udon", price: "IDR 20K", img: img7 },
    { name: "Cireng", price: "IDR 20K", img: img8 },
    { name: "Pancake", price: "IDR 20K", img: img9 },
    { name: "Croissant", price: "IDR 20K", img: img10 },
    { name: "Siomay", price: "IDR 20K", img: img11 },
    { name: "Tempura Udang", price: "IDR 20K", img: img12 },
];


const DashboardPage = () => {
        return (
        <section className="bg-secondary min-h-dvh text-white py-12">
            <div className="container">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#c09363]">Menu <span className="text-white">Kami</span></h2>
                <p className="text-gray-400 mt-2 max-w-md mx-auto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quisquam corrupti dolore.
                </p>

                <div className="flex justify-center gap-8 mt-8 flex-wrap">
                    {menuItems.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="w-[200px] h-[200px] rounded-full overflow-hidden mx-auto border-4 border-gray-600">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="mt-4 font-semibold text-lg">- {item.name} -</h3>
                            <p className="text-gray-400">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
}
export default DashboardPage
