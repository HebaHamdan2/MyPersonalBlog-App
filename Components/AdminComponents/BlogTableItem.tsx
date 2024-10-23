import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({authorImage,title,author,date,deleteBlog,mongoId}) => {
    const BlogDate=new Date(date);
  return (
   <tr className='bg-white border-b'>
    <th scope='row' className='items-center gap-3 hidden sm:flex px-6 font-medium text-gray-900  whitespace-nowrap'>
        <Image src={authorImage?authorImage:"/profile_icon.png"} alt="Author" height={40} width={40} />
   <p>{author?author:"No Author"}</p>
    </th>
    <td className='px-6 py-4'>
{title?title:"no title"};
    </td>
    <td className='px-6 py-4'>
{BlogDate.toDateString()}
    </td>
    <td onClick={()=>{deleteBlog(mongoId)}} className='px-6 py-4 cursor-pointer'>
x
    </td>
   </tr>
  )
}

export default BlogTableItem