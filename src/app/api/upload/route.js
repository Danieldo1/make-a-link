import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import uniqid from 'uniqid'


export async function POST(req){
const data= await req.formData()
if(data.has('file')){
    const file = data.get('file')
    const s3Client =new S3Client({
        region:'us-east-1',
        credentials:{
            accessKeyId:process.env.S3_ACCESS_KEY,
            secretAccessKey:process.env.S3_SECRET_ACCESS_KEY
        }
    })
    const randomId = uniqid()
    const ext = file.name.split('.').pop()
    const newFile = randomId+ "."+ext

    const chunks = []
    for await (const chunk of file.stream()){
chunks.push(chunk)
    }
     await s3Client.send(new PutObjectCommand({
        Bucket:process.env.BUCKET_NAME,
        Key:newFile,
        ACL:'public-read',
        Body: Buffer.concat(chunks),
        ContentType:file.type,
    }))

    const link = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${newFile}`


    return Response.json(link)
}
}