import Image from "next/image";
import content from "@/public/image/content.jpg";
import tentangkami from "@/public/image/tentang kami.jpg"
import { FaCheckCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import about from "@/public/image/about.jpg"
import about2 from "@/public/image/about-2.jpg"
 
const DashboardPage = () => {
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
                                    className="rounded-md"/>
                                <div>
                                    <FaCirclePlay className="text-red-700 text-5xl absolute top-32 left-[190px] hover:text-white duration-300 ease-in-out transition-all" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
};

export default DashboardPage;





// const DashboardPage = () => {
//     return (
//       <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 to-orange-100">
//         {/* Hero Section */}
//         <header className="relative flex-1 bg-[#1A246A] text-white">
//           {/* Gambar Background */}
//           <div
//             className="absolute inset-0 bg-cover bg-center opacity-60"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
//             }}
//           ></div>
  
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-[#1A246A]/50 to-[#1A246A]"></div>

  
//           {/* Konten Header */}
//           <div className="relative z-10 py-24 px-6 md:px-20 text-center">
//             <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
//             Be The Fastest delivery In Your City 
//             </h1>
//             <p className="text-lg md:text-2xl font-medium text-white mb-8 max-w-3xl mx-auto">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque tempore possimus quam et quisquam consequatur dolore animi dicta pariatur harum, aspernatur rem odio repellat nemo illum eos officiis nihil!
//             </p>
//             <div className="flex justify-center space-x-6">
//               <button className="bg-white text-blue-600 px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl hover:text-white hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
//                 Explore Menu
//               </button>
//               <button className="bg-blue-700 text-white px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
//                 Order Now
//               </button>
//             </div>
//           </div>
//         </header>
  
//         {/* Main Content */}
//         <main className="flex-1 p-6 md:p-12 text-center">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-8">
//             Apa aja nih yang enak di Malang!
//           </h2>
//           <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
//           Yuk, dicek koleksi makanan populer, favoritnya foodies lokal, dan penawaran terbaik kami di lokasimu!
//           </p>
  
//           {/* Service Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Popular Dishes</h3>
//               <p className="text-gray-700 mb-6">Explore our popular dishes that everyone loves!</p>
//               <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
//                 Explore Menu
//               </button>
//             </div>
//             <div className="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Now</h3>
//               <p className="text-gray-700 mb-6">Get your favorite food delivered to your doorstep!</p>
//               <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300">
//                 Order Now
//               </button>
//             </div>
//             <div className="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Special Offers</h3>
//               <p className="text-gray-700 mb-6">Check out our latest deals and offers on food!</p>
//               <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
//                 View Offers
//               </button>
//             </div>
//           </div>
//           {/* our menu start */}
//       <div className="flex flex-col h-max">
//         <div className="mt-36 mb-14 mx-28">
//           <h1 className="font-semibold text-md uppercase text-blue-500 mb-3">
//             our menu
//           </h1>
//           <h1 className="capitalize text-blue-500 font-bold text-4xl ">
//             menu that always <br /> make you fall in love
//           </h1>
//         </div>
//         <div className="flex flex-row justify-between mx-28 overflow-hidden space-x-8">
//           <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg  animate-moveLeftLoop hover:animate-none">
//             {/* gambar */}
           

//             {/* overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

//             {/* konten */}
//             <div className="absolute bottom-4 left-4 text-white">
//               <h1 className="text-lg font-bold">Italian Pizza</h1>
//               <p className="text-xl font-semibold">$ 7.49</p>
//               <button className="mt-2 px-4 py-2  text-white rounded-lg text-sm flex items-center gap-2">
//                 Order Now
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="16px"
//                   viewBox="0 0 24 24"
//                   width="16px"
//                   fill="#fff"
//                 >
//                   <path d="M10 17l5-5-5-5v10z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg mr-8 animate-moveLeftLoop hover:animate-none">
//             {/* gambar */}
           

//             {/* overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

//             {/* konten */}
//             <div className="absolute bottom-4 left-4 text-white">
//               <h1 className="text-lg font-bold">Milk Shake</h1>
//               <p className="text-xl font-semibold">$ 5.28</p>
//               <button className="mt-2 px-4 py-2  text-white rounded-lg text-sm flex items-center gap-2">
//                 Order Now
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="16px"
//                   viewBox="0 0 24 24"
//                   width="16px"
//                   fill="#fff"
//                 >
//                   <path d="M10 17l5-5-5-5v10z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg mr-8 animate-moveLeftLoop hover:animate-none">
//             {/* gambar */}
          

//             {/* overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

//             {/* konten */}
//             <div className="absolute bottom-4 left-4 text-white">
//               <h1 className="text-lg font-bold">Dessert</h1>
//               <p className="text-xl font-semibold">$ 6.15</p>
//               <button className="mt-2 px-4 py-2  text-white rounded-lg text-sm flex items-center gap-2">
//                 Order Now
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="16px"
//                   viewBox="0 0 24 24"
//                   width="16px"
//                   fill="#fff"
//                 >
//                   <path d="M10 17l5-5-5-5v10z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg mr-8 animate-moveLeftLoop hover:animate-none">
//             {/* gambar */}
            

//             {/* overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

//             {/* konten */}
//             <div className="absolute bottom-4 left-4 text-white">
//               <h1 className="text-lg font-bold">Burger</h1>
//               <p className="text-xl font-semibold">$ 10.00</p>
//               <button className="mt-2 px-4 py-2  text-white rounded-lg text-sm flex items-center gap-2">
//                 Order Now
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="16px"
//                   viewBox="0 0 24 24"
//                   width="16px"
//                   fill="#fff"
//                 >
//                   <path d="M10 17l5-5-5-5v10z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* our menu end */}
//         </main>
  
//         {/* Footer */}
//         <footer className=" text-blue-500 text-center py-6 mt-12">
//           <p className="text-sm">© 2025 Foodies. All rights reserved.</p>
//           <p className="text-sm">Contact us: support@foodies.com</p>
//         </footer>
//       </div>
//     );
//   };
  
//   export default DashboardPage;