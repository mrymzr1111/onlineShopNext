
"use server"
import bcrypt from "bcrypt";
import { getCollection } from "@/lib/db";
import { loginFormSchema, RegisterFormSchema } from "@/lib/rules";
import { createSession } from "@/lib/sessions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export type RegisterActionState = {
  email?: string;
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  success?: boolean;
};


//AUTH REGIS5ER

export async function register(
  _state: RegisterActionState = {},
  formData: FormData
): Promise<RegisterActionState> {
  const validatedFields = RegisterFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      email: String(formData.get("email") || ""),
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const userCollection = await getCollection("users");
  if (!userCollection) {
    return {
      email,
      errors: { email: ["Server error. Please try again"] },
      
    };
  }

  const existingUser = await userCollection.findOne({ email });
  if (existingUser) {
    return {
      email,
      errors: { email: ["This email is already registered"]},
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await userCollection.insertOne({
    email,
    password: hashedPassword,
  });

  await createSession(result.insertedId.toString());

  return { success: true };
}



// login auth
export async function LogIn(
  _state: RegisterActionState = {},
  formData: FormData
): Promise<RegisterActionState> {
  const validatedFields = loginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });


  //is invalid or not
  if (!validatedFields.success) {
    //return obj error state
    return {
      email: String(formData.get("email") || ""),
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
//extract from feild grab them
  const { email, password } = validatedFields.data;
 // check email is on database 
//get collection from db

  const userCollection = await getCollection("users");
  if (!userCollection) {
    return {
      email,
      errors: {
        email: ["Server error. Please try again"],
      },
    };
  }
//findone({}) gets obj
  const user = await userCollection.findOne({ email });
  if (!user) {
    return {
      email,
      errors: {
        email: ["invalid credentials"]
      },
    };
  }
//check password bcrypt (comapre method take palne txt pw and hashed pw(user or db))

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return {
      email,
      errors: {
        password: ["password is wrong"],
      },
    };
  }
//create sessiom
  await createSession(user._id.toString());
redirect("/admin/mainpanel")
  return {
    success: true,
  };
}


export async function  Logout() {
const cookieStore= await cookies()
  cookieStore.delete("session")
  redirect("/")
}