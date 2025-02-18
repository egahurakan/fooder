import Image from "next/image";

const DashboardPage = () => {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 to-orange-100">
        {/* Hero Section */}
        <header className="relative flex-1 bg-[#1A246A] text-white">
          {/* Gambar Background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
            }}
          ></div>
  
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A246A]/50 to-[#1A246A]"></div>

  
          {/* Konten Header */}
          <div className="relative z-10 py-24 px-6 md:px-20 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
            Be The Fastest delivery In Your City 
            </h1>
            <p className="text-lg md:text-2xl font-medium text-white mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque tempore possimus quam et quisquam consequatur dolore animi dicta pariatur harum, aspernatur rem odio repellat nemo illum eos officiis nihil!
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl hover:text-white hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
                Explore Menu
              </button>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
                Order Now
              </button>
            </div>
          </div>
        </header>
  
        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Apa aja nih yang enak di Malang!
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Yuk, dicek koleksi makanan populer, favoritnya foodies lokal, dan penawaran terbaik kami di lokasimu!
          </p>
  
          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Popular Dishes</h3>
              <p className="text-gray-700 mb-6">Explore our popular dishes that everyone loves!</p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
                Explore Menu
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Now</h3>
              <p className="text-gray-700 mb-6">Get your favorite food delivered to your doorstep!</p>
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300">
                Order Now
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Special Offers</h3>
              <p className="text-gray-700 mb-6">Check out our latest deals and offers on food!</p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
                View Offers
              </button>
            </div>
          </div>
          {/* our menu start */}
      <div className="flex flex-col h-max">
        <div className="mt-36 mb-14 mx-28">
          <h1 className="font-semibold text-md uppercase text-blue-500 mb-3">
            our menu
          </h1>
          <h1 className="capitalize text-blue-500 font-bold text-4xl ">
            menu that always <br /> make you fall in love
          </h1>
        </div>
        <div className="flex flex-row justify-between mx-28 overflow-hidden space-x-8">
          <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg  animate-moveLeftLoop hover:animate-none">
            {/* gambar */}
           

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* konten */}
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-lg font-bold">Italian Pizza</h1>
              <p className="text-xl font-semibold">$ 7.49</p>
              <button className="mt-2 px-4 py-2  text-white rounded-lg text-sm flex items-center gap-2">
                Order Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 0 24 24"
                  width="16px"
                  fill="#fff"
                >
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg mr-8 animate-moveLeftLoop hover:animate-none">
            {/* gambar */}
           

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* konten */}
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-lg font-bold">Milk Shake</h1>
              <p className="text-xl font-semibold">$ 5.28</p>
              <button className="mt-2 px-4 py-2  text-white rounded-lg text-sm flex items-center gap-2">
                Order Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 0 24 24"
                  width="16px"
                  fill="#fff"
                >
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg mr-8 animate-moveLeftLoop hover:animate-none">
            {/* gambar */}
          

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* konten */}
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-lg font-bold">Dessert</h1>
              <p className="text-xl font-semibold">$ 6.15</p>
              <button className="mt-2 px-4 py-2  text-white rounded-lg text-sm flex items-center gap-2">
                Order Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 0 24 24"
                  width="16px"
                  fill="#fff"
                >
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg mr-8 animate-moveLeftLoop hover:animate-none">
            {/* gambar */}
            

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* konten */}
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-lg font-bold">Burger</h1>
              <p className="text-xl font-semibold">$ 10.00</p>
              <button className="mt-2 px-4 py-2  text-white rounded-lg text-sm flex items-center gap-2">
                Order Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 0 24 24"
                  width="16px"
                  fill="#fff"
                >
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* our menu end */}
        </main>
  
        {/* Footer */}
        <footer className=" text-blue-500 text-center py-6 mt-12">
          <p className="text-sm">© 2025 Foodies. All rights reserved.</p>
          <p className="text-sm">Contact us: support@foodies.com</p>
        </footer>
      </div>
    );
  };
  
  export default DashboardPage;