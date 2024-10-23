"use client"; 

import { Footer } from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {
    params: Promise<{
        id?: string;
    }>;
}

const Page = ({ params }: Props) => {
    const [data, setData] = useState<any>(null); // Use 'any' until you define the data type
    const [id, setId] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchParams = async () => {
            const resolvedParams = await params;
            setId(resolvedParams.id);
        };
        fetchParams();
    }, [params]);

    const fetchBlogData = async () => {
        if (id) {
            const response = await axios.get('/api/blogs', {
                params: { id }
            });
            setData(response.data);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, [id]);
  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
    <div className='flex justify-between items-center'>
        <Link href='/'>
        <Image src='/bloglogo-bg.png' width={180} height={100} alt='' className='w-[130px] sm:w-quto' priority />
        </Link>
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get started</button>
    </div>
    <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image className='mx-auto mt-6 border border-white rounded-full' src='/profile_icon.png' width={60} height={60} alt='Heba Hamdan'  />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto '>{data.author}</p>
    </div>  
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='blog pic' priority />
        <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
 <p>{data.description}</p>
 <div className='my-24' >
        <p>Share this article on social media </p>
        <div className="flex">
            <Image src='/facebook.svg' width={50} height={50} alt='facebook' />
            <Image src='/instagram.svg' width={50} height={50} alt='instagram' />
            <Image src='/linkedin.svg' width={50} height={50} alt='LinkedIn' />
        </div>
     </div>
 <div > 
 </div>
     </div>
    <Footer/>
  </>
  :<></>
);
};

export default Page;
