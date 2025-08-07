


import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";
import Link from "next/link";
import Layout from "@/components/dash";
import getAuthUser from "@/lib/getAuthUser";
import DeleteMerchForm from "@/components/DeleteMerchForm";

export default async function Dashboard() {
  const user = await getAuthUser();
  if (!user || typeof user.userId !== "string") {
    throw new Error("User ID is missing or not a string");
  }

  const merchCollection = await getCollection("merchandise");
  const merchUser = await merchCollection
    ?.find({ userId: new ObjectId(user.userId) })
    .sort({ $natural: -1 })
    .toArray();

  return (
    <Layout>
      <div
        className="fullscreen p-6 sm:p-10 bg-gray-200
                   animate-fadeIn"
      >
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 sm:mb-10 tracking-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
            Dashboard
          </span>
        </h1>

        {merchUser && merchUser.length > 0 ? (
          <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
            <table className="w-full min-w-[600px] table-auto bg-white rounded-2xl">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-left">
                  <th className="p-3 sm:p-4">Title</th>
                  <th className="p-3 sm:p-4 text-center">View</th>
                  <th className="p-3 sm:p-4 text-center">Edit</th>
                  <th className="p-3 sm:p-4 text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {merchUser.map((merch) => (
                  <tr
                    key={merch._id.toString()}
                    className="hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                  >
                    <td className="p-3 sm:p-4 font-medium text-indigo-700">
                      {merch.title}
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <Link
                        href={`/show/${merch._id.toString()}`}
                        className="bg-black hover:bg-blue-900 text-white font-semibold py-1 px-3 rounded-lg transition 
                                   transform hover:scale-105 active:scale-95"
                      >
                        View
                      </Link>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <Link
                        href={`/admin/edit/${merch._id.toString()}`}
                        className="bg-green-200 hover:bg-green-300 text-green-800 font-semibold py-1 px-3 rounded-lg transition
                                   transform hover:scale-105 active:scale-95"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <DeleteMerchForm merchId={merch._id.toString()} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-6 p-4 bg-yellow-100 rounded-lg text-yellow-800 flex items-center gap-3 animate-fadeIn">
            <span>⚠️</span>
            <span>No merchandise found. Start by adding your first item!</span>
          </div>
        )}
      </div>
    </Layout>
  );
}
