"use server"

import { ID } from "node-appwrite"
import { databases } from "../appwrite.config"
import { parseStringify } from "../utils"

interface sanitizedData {
  name: string
  email: string
  phone: string
  services: string
  message: string
}

export const contactFormData = async (sanitizedData: sanitizedData) => {
  try {
    const newData = await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID as string,
      ID.unique(),
      sanitizedData
    )
    return parseStringify(newData)
  } catch (error) {
    console.log(error)
  }
}
