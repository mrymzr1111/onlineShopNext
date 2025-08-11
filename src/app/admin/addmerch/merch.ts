
"use server";

import { redirect } from "next/navigation";


import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";
import { merchSchema } from "@/lib/rules";

import { revalidatePath } from "next/cache";
import getAuthUser from "@/lib/getAuthUser";

export type merchActionState = {
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  errors?: {
    image?: string[];
    title?: string[];
    description?: string[];
    price?: string[];
      id?: string[];
  };
  success?: boolean;
};

// Server Action
export async function createMerch(
  _state: merchActionState = {},
  formData: FormData
): Promise<merchActionState> {
  const user = await getAuthUser();
  if (!user) return redirect("/");

  const raw = {
    image: formData.get("image")?.toString() ?? "",
    title: formData.get("title")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
    price: formData.get("price")?.toString() ?? "",
  };

  const validated =merchSchema.safeParse(raw);

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const merchCollection = await getCollection("merchandise");

    if (!merchCollection) {
      throw new Error("Collection not found.");
    }

    const newMerch = {
      image: validated.data.image,
      title: validated.data.title,
      description: validated.data.description,
      price: parseFloat(validated.data.price),
      userId: new ObjectId(user.userId),
    };

    await merchCollection.insertOne(newMerch);

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error creating merchandise:", error);
    return {
      success: false,
    };
  }
}




export async function updateMerch(formData: FormData): Promise<merchActionState> {
  const user = await getAuthUser();
  if (!user) return redirect("/");

  const raw = {
    id: formData.get("id")?.toString() ?? "",
    image: formData.get("image")?.toString() ?? "",
    title: formData.get("title")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
    price: formData.get("price")?.toString() ?? "",
  };

  const validated = merchSchema.safeParse(raw);

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      success: false,
    };
  }

  const data = validated.data;
  const merchCollection = await getCollection("merchandise");

  if (!merchCollection || !raw.id || raw.id.length !== 24) {
    return {
      errors: { id: ["Invalid ID"] },
      success: false,
    };
  }

  // Check if the user owns the merch item
  const existingMerch = await merchCollection.findOne({ _id: new ObjectId(raw.id) });

  if (!existingMerch) {
    return {
      errors: { id: ["Merchandise not found"] },
      success: false,
    };
  }

  if (existingMerch.userId?.toString() !== user.userId) {
    return {
      errors: { id: ["You are not authorized to update this item"] },
      success: false,
    };
  }

  await merchCollection.updateOne(
    { _id: new ObjectId(raw.id) },
    {
      $set: {
        image: data.image,
        title: data.title,
        description: data.description,
        price: Number(data.price),
      },
    }
  );

  return {
    success: true,
    image: data.image,
    title: data.title,
    description: data.description,
    price: Number(data.price),
  };
}


//delete part server

export async function deleteMerch(formData: FormData): Promise<void> {
  const user = await getAuthUser();
  if (!user) return redirect("/");

  const id = formData.get("id")?.toString();
  if (!id || id.length !== 24) {
    return;
  }

  const merchCollection = await getCollection("merchandise");
  if (!merchCollection) {
    return;
  }






  // const handleDelete=async ()=> {
  //   const confirmed=window.confirm("do you want to delete?");
  //   if (!confirmed) return;
  // }
  const deleteResult = await merchCollection.deleteOne({ _id: new ObjectId(id) });

  if (deleteResult.deletedCount === 0) {
    // No document deleted, handle if needed
    return;
  }
  


// Add this:
 revalidatePath("/admin/dashboard");





  // Revalidate homepage or any path



}
 
