


import Link from "next/link";

export default function MerchCard({ merch }: { merch: any }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <Link href={`/show/${merch._id.toString()}`} className="block">
        {/* Image */}
        <div className="relative w-full aspect-[4/5] bg-gray-100">
          <img
            src={merch.image}
            alt={merch.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 truncate">{merch.title}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {merch.description}
          </p>
          <p className="text-xl font-semibold text-rose-600 mt-3">
            ${merch.price}
          </p>
        </div>
      </Link>
    </div>
  );
}
