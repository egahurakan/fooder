"use client"


import Image from "next/image";
import content from "@/public/image/content.jpg";
import tentangkami from "@/public/image/tentang kami.jpg"
import { FaCheckCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import about from "@/public/image/about.jpg"
import about2 from "@/public/image/about-2.jpg"
import { ShoppingCart, Eye, Phone, Mail, User } from "lucide-react";
import { useState } from "react";

import img from "@/public/image/products/1.png"
import img2 from "@/public/image/products/2.png"
import img3 from "@/public/image/products/3.png"
import img4 from "@/public/image/products/4.png"
import img5 from "@/public/image/products/5.png"
import img6 from "@/public/image/products/6.png"

const products = [
    {
        id: 1,
        name: "Robusta Brazil",
        price: 20000,
        rating: 5,
        image: img,
    },
    {
        id: 2,
        name: "Arabica Blend",
        price: 25000,
        rating: 5,
        image: img2,
    },
    {
        id: 3,
        name: "Primo Passo",
        price: 30000,
        rating: 5,
        image: img3,
    },
    {
        id: 4,
        name: "Aceh Gayo",
        price: 35000,
        rating: 5,
        image: img4,
    },
    {
        id: 5,
        name: "Sumatra Mandheling",
        price: 40000,
        rating: 5,
        image: img5,
    },
];

const DashboardPage = () => {

    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        noHp: "",
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="min-h-dvh bg-secondary">
            <div className="container">
                {/* Hero Section */}
                <div className="relative flex justify-center items-center">
                    <Image
                        src={content}
                        alt="Gambar content kopi"
                        className="w-full h-[635px]"
                    />
                    <div className="bg-gradient-to-t from-black to-transparent w-full h-[200px] absolute bottom-0"></div>
                    <div className="absolute top-24 text-white text-center">
                        <h1 className="text-7xl font-bold leading-tight">
                            Mari Nikmati Secangkir <span className="text-primary">Kopi</span>
                        </h1>
                        <p className="text-2xl font-thin mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Temporibus, iure.
                        </p>
                    </div>
                </div>

                {/* About Section */}
                <section className="about mt-20 px-24 pt-16 pb-20">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">
                        <span className="text-primary">Tentang</span> Kami
                    </h2>
                    <div className="flex flex-col md:flex-row px-32 gap-8">
                        <div className="about-img w-full md:w-1/2">
                            <Image
                                src={tentangkami}
                                width={600}
                                height={600}
                                alt="Tentang Kami"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="content w-full md:w-1/2 text-lg text-gray-200">
                            <h3 className="text-2xl font-semibold mb-4">
                                Kenapa memilih kopi kami?
                            </h3>
                            <div className="font-thin text-xl w-[500px] leading-normal">
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                                    omnis beatae perferendis quidem tempore rerum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                                    iusto in? Rerum minima minus necessitatibus, pariatur quidem
                                    illo eveniet voluptatem.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="py-8">
                    <div className="flex justify-center">
                        <div className="px-28 space-y-12">
                            <Image
                                src={about}
                                width={700}
                                alt="gambar about" />
                            <div className="border-2 border-primary  text-center">
                                <div className="py-3">
                                    <h1 className="font-bold text-primary">Book a Table</h1>
                                    <h1 className="text-primary font-semibold">+1 5589 55488 55</h1>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 font-thin text-white">
                            <i className="inline-block w-[470px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </i>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-3">
                                    <FaCheckCircle className="text-primary text-lg" />
                                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaCheckCircle className="text-primary text-lg" />
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                </div>
                                <div className="flex space-x-3">
                                    <FaCheckCircle className="text-primary text-lg" />
                                    <p className="w-[470px]">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                            <p className="w-[450px]">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                            <div className="relative">
                                <Image
                                    src={about2}
                                    alt="about2"
                                    width={397}
                                    className="rounded-md" />
                                <div>
                                    <FaCirclePlay className="text-red-700 text-5xl absolute top-32 left-[190px] hover:text-white duration-300 ease-in-out transition-all" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-black text-white py-24">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-primary">Produk Unggulan <span className="text-white">Kami</span></h2>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10">
                        {products.map((product, index) => (
                            <div key={index} className="border border-gray-700 p-4 rounded-lg relative hover:shadow-lg transition">
                                <Image src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                                <h3 className="text-lg font-bold mt-3">{product.name}</h3>
                                <div className="flex items-center mt-2">
                                    {Array.from({ length: product.rating }, (_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <p className="text-amber-400 font-semibold mt-2">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="bg-secondary text-white py-16 px-6 md:px-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
                        Kontak <span className="text-white">Kami</span>
                    </h2>
                    <p className="text-center text-gray-300 mt-4 max-w-lg mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, modi?
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-10">
                        {/* Google Maps */}
                        <iframe
                            className="w-full md:w-1/2 h-72 rounded-xl shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253489.60943483375!2d107.61912282868691!3d-6.917463881570242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1727516144127!5m2!1sen!2sid"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* Form Kontak */}
                        <form
                            onSubmit={handleSubmit}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg w-full md:w-1/3 space-y-4"
                        >
                            <div className="flex items-center border border-gray-600 rounded-lg p-3">
                                <User className="text-gray-400 pr-3" />
                                <input
                                    type="text"
                                    name="nama"
                                    placeholder="Nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    className="bg-transparent focus:outline-none text-white w-full"
                                />
                            </div>
                            <div className="flex items-center border border-gray-600 rounded-lg p-3">
                                <Mail className="text-gray-400 pr-3" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-transparent focus:outline-none text-white w-full"
                                />
                            </div>
                            <div className="flex items-center border border-gray-600 rounded-lg p-3">
                                <Phone className="text-gray-400 pr-3" />
                                <input
                                    type="text"
                                    name="noHp"
                                    placeholder="No HP"
                                    value={formData.noHp}
                                    onChange={handleChange}
                                    className="bg-transparent focus:outline-none text-white w-full"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-amber-500 text-gray-900 font-semibold py-2 rounded-lg hover:bg-amber-600 transition duration-300"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default DashboardPage;