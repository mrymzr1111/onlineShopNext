import Link from "next/link";




     export default function Home() {
  return (
    <section className="bg-pink-100 py-2 px-6 md:px-20  ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
         Elevate Your Style
          </h1>
          <p className="text-pink-600 text-xl mt-2 font-semibold">
             Discover the Latest Fashion Trends
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed max-w-md mx-auto md:mx-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
            obcaecati cumque vel natus placeat sapiente assumenda excepturi
            quaerat modi ipsam.
          </p>
          <Link  href= '/store'    >
          <button        className="mt-6 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
            Shop Now
          </button>
          </Link>
          
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/mj.png" 
            alt="Bouquet of tulips"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
  
  