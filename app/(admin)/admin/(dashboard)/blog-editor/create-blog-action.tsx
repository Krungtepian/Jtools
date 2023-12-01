'use server'

import { connectDb } from "@/lib/mongo"

export default async function createBlog(_: any, formData: FormData) {
  await connectDb()
}