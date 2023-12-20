import { Views } from "@/models/Views"
import mongoose from "mongoose"

export const POST=async (req) => {
    mongoose.connect(process.env.MONGODB_URL)
    const url= new URL(req.url)
   const clickedLink= atob(url.searchParams.get('url'))
    const page = url.searchParams.get('page')
await Views.create({type:'click',uri:clickedLink,page})
return Response.json(true)
}