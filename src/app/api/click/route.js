import { Views } from "@/models/Views"
import mongoose from "mongoose"

export const POST=async () => {
    mongoose.connect(process.env.MONGODB_URL)
await Views.create({type:'click',uri:''})
return Response.json(true)
}