// "use server"

// export async  function DashBoard(state,formData) {

//     const title=formData.get("title");
//     const image=formData.get("image");
//     const description=formData.get("description");
//     const price=formData.get("price");
   
    
    
// }




// app/actions/dashboardAction.ts
//....................................................................................................................
// "use server";

// import { dashboardFormSchema } from "@/lib/rules";
// export async function DashBoard(prevState: any, formData: FormData) {
//   const raw = {
//     image: formData.get("image"),
//     title: formData.get("title"),
//     description: formData.get("description"),
//     price: formData.get("price"),
//   };

//   const parsed = dashboardFormSchema.safeParse(raw);

//   if (!parsed.success) {
//     return {
//       errors: parsed.error.flatten().fieldErrors,
//     };
//   }

//   const { image, title, description, price } = parsed.data;

//   // Save to MongoDB here
//   // await db.collection("products").insertOne({ image, title, description, price });

//   return { success: true };
// }

    //.................................................................................

//     "use server"; // ✅ Must be present for server action to work

// import { dashboardFormSchema } from "@/lib/rules"; // ✅ Zod validation schema

// // 🔧 Server action that processes the form on the server side
// export async function DashBoard(prevState: any, formData: FormData) {
//   // 🔧 Get values from formData
//   const raw = {
//     image: formData.get("image"),
//     title: formData.get("title"),
//     description: formData.get("description"),
//     price: formData.get("price"),
//   };

//   // 🔧 Validate data using schema
//   const parsed = dashboardFormSchema.safeParse(raw);

//   if (!parsed.success) {
//     return {
//       errors: parsed.error.flatten().fieldErrors, // ✅ Send validation errors back
//     };
//   }

//   const { image, title, description, price } = parsed.data;

//   // 🔧 Insert into database (you can uncomment and use your DB code)
//   // await db.collection("products").insertOne({ image, title, description, price });

//   return { success: true }; // ✅ Return success flag
// }

// "use server";

// import { dashboardFormSchema } from "@/lib/rules";
// import { getCollection } from "@/lib/mongodb";

// export async function createProduct(prevState: any, formData: FormData) {
//   // دریافت مقدارها از فرم
//   const raw = {
//     image: formData.get("image"),
//     title: formData.get("title"),
//     description: formData.get("description"),
//     price: formData.get("price"), // به صورت string دریافت می‌شه
//   };

//   // اعتبارسنجی با zod
//   const parsed = dashboardFormSchema.safeParse(raw);

//   if (!parsed.success) {
//     return { errors: parsed.error.flatten().fieldErrors };
//   }

//   const { image, title, description, price } = parsed.data;

//   // اتصال به کالکشن محصولات
//   const productsCollection = await getCollection("products");
//   if (!productsCollection) throw new Error("Cannot access products collection");

//   // درج محصول در دیتابیس
//   await productsCollection.insertOne({
//     image,
//     title,
//     description,
//     price: typeof price === "string" ? parseFloat(price) : price, // تبدیل امن
//   });

//   return { success: true };
// }
