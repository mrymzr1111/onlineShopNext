// "use server";






// import { errors } from "jose";
// import { redirect } from "next/navigation";

// import  getAuthUser from "@/lib/getAuthUser";
// import { merchandiseFormSchema } from "@/lib/rules";


// export async function createMerch(prevState,formData) {
// //check is the user is signed in

// const user=await getAuthUser ()
// console.log("Authenticated user:", user);
// if (!user) return redirect ("/");

// const raw = {
//   image: String(formData.get("image") ?? ""),
//   title: String(formData.get("title") ?? ""),
//   description: String(formData.get("description") ?? ""),
//   // price: formData.get("price") ?? "", // string expected, coerced later
//   price: String(formData.get("price") ?? ""),

// };

// console.log(raw);


//   const validatedFeilds=merchandiseFormSchema.safeParse(raw)

//   //if any form is invalid 
//   if (!validatedFeilds.success) {
//     //  console.log("Validation result:", validatedFeilds);
//     console.error("🛑 Validation failed:", validatedFeilds.error.format());
//     return {
//       errors:validatedFeilds.error.flatten().fieldErrors,
     
//     }
//   }
// //save to database 

  

// }



// "use server";

// import { redirect } from "next/navigation";
// import getAuthUser from "@/lib/getAuthUser";
// import { merchandiseFormSchema } from "@/lib/rules";

// export async function createMerch(prevState, formData) {
//   try {
//     const user = await getAuthUser();
//     console.log("✅ Authenticated user:", user);

//     if (!user) return redirect("/");

//     const raw = {
//       image: String(formData.get("image") ?? ""),
//       title: String(formData.get("title") ?? ""),
//       description: String(formData.get("description") ?? ""),
//       price: String(formData.get("price") ?? ""),
//     };

//     console.log("📝 Raw input:", raw);

//     const validatedFields = merchandiseFormSchema.safeParse(raw);

//     if (!validatedFields.success) {
//       console.error("🛑 Validation failed:", validatedFields.error.format());
//       return {
//         errors: validatedFields.error.flatten().fieldErrors,
//         values: raw,
//         success: false,
//       };
//     }

//     // TODO: Save to database here (placeholder)
//     console.log("✅ VALID PRODUCT:", validatedFields.data);

//     // Example: redirect or success state
//     return {
//       success: true,
//       values: {},
//       errors: {},
//     };
//   } catch (err) {
//     console.error("❌ SERVER ERROR", err);
//     return {
//       errors: { form: ["Server error occurred"] },
//       values: {},
//       success: false,
//     };
//   }
// }




// "use server";

// import { redirect } from "next/navigation";
// import getAuthUser from "@/lib/getAuthUser";
// import { merchandiseFormSchema } from "@/lib/rules";


// export type merchActionState = {
//   image?: string; // URL or base64 string of uploaded image
//   title?: string;
//   description?: string;
//   price?: number;

//   errors?: {
//     image?: string[];
//     title?: string[];
//     description?: string[];
//     price?: string[];
//   };

//   success?: boolean;
// };




// export async function createMerch(state: merchActionState = {},
//   formData: FormData) : Promise <merchActionState> {
//   const user = await getAuthUser();
//   if (!user) return redirect("/");

// // const image=formData.get("image")
// // const title=formData.get("image")
// // const description=formData.get("description")
// //  const price= formData.get("price") 
// // console.log(description,price,image);


// }



//   const raw = {
//     image: FormData.get("image") ?? "",
//     title: formData.get("title") ?? "",
//     description: formData.get("description") ?? "",
//     price: formData.get("price") ?? "",
//   };

//   // Validate input using zod
//   const validated = merchandiseFormSchema.safeParse(raw);

//   if (!validated.success) {
//     // Return errors to client form state
//     return {
//       errors: validated.error.flatten().fieldErrors,
//       values: raw,
//       success: false,
//     };
//   }

//   // Save to DB here, using validated.data

//   return {
//     success: true,
//   };
// }
// keke
// "use server"
// import { getCollection } from "@/lib/db";
// import getAuthUser from "@/lib/getAuthUser";
// import { merchSchema } from "@/lib/rules";
// import { ObjectId } from "mongodb";

// import { redirect } from "next/navigation";



// export type merchActionState = {
//   image?: string; // URL or base64 string of uploaded image
//   title?: string;
//   description?: string;
//   price?: number;

//   errors?: {
//     image?: string[];
//     title?: string[];
//     description?: string[];
//     price?: string[];
//   };

//   success?: boolean;
// };

// export async function  createMerch(state:any,formData: FormData): Promise<merchActionState> {

// //check user is signed in 
//   const user=await getAuthUser();
//   console.log(user)

//   // if (!user) return redirect ("/");


//   //validate form field
//   const raw = {
//     image: formData.get("image") as string,
//     title: formData.get("title") as string,
//     description: formData.get("description") as string,
//     price: formData.get("price") as string,
//   };


//   const validatFeields = merchSchema.safeParse(raw);



//   if (!validatFeields.success) {
//     return{errors:validatFeields.error.flatten().fieldErrors,
 
    
//     }
//   }

// //save to database
// try {
//   const MerchCollection=await getCollection('merchandise')
//   const merchandises={
//      image: validatFeields.data.image ,
//      title: validatFeields.data.title    ,
//     description:validatFeields.data.description ,
// price:validatFeields.data.price,
// userId:ObjectId.createFromHexString(user.userId)
//   }
// } catch (error) {
  
// }

//   return {
//     success: true,
//   };
// }



"use server";

import { redirect } from "next/navigation";
import getAuthUser from "@/lib/getAuthUser";

import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";
import { merchSchema } from "@/lib/rules";

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
  state: merchActionState = {},
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
      // userId: new ObjectId(user.userId),
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



// //edi
// export async function updateMerch(

//   formData: FormData
// ): Promise<merchActionState> {
//   const user = await getAuthUser();
//   if (!user) return redirect("/");

//   const raw = {
//     image: formData.get("image")?.toString() ?? "",
//     title: formData.get("title")?.toString() ?? "",
//     description: formData.get("description")?.toString() ?? "",
//     price: formData.get("price")?.toString() ?? "",
//   };

//   const validated =merchSchema.safeParse(raw);

//   if (!validated.success) {
//     return {
//       errors: validated.error.flatten().fieldErrors,
//       success: false,
//     };
//   }

//  //sa


// }
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