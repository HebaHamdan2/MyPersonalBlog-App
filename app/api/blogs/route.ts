import { NextRequest, NextResponse } from "next/server";
import {ConnectDB} from "@/lib/config/db"
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel"
const LoadDB=async()=>{
    await ConnectDB();
}
LoadDB();
export async function GET(){
     const blogs=await BlogModel.find({});
    return NextResponse.json({blogs}); 
}
export async function POST(request:NextRequest){
    const formData=await request.formData();
    const timestamp=Date.now();
    const image=formData.get('image');
    const imageByteData=await image.arrayBuffer();
    const buffer=Buffer.from(imageByteData);
    const path=`./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl=`/${timestamp}_${image.name}`;
    const blogData={
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImage:`${formData.get('authorImage')}`
    }
    await BlogModel.create(blogData);
    return NextResponse.json({success:true,msg:"Blog Addded Successfully"});
}