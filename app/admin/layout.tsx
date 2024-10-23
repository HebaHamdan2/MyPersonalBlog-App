import { Sidebar } from "@/Components/AdminComponents/Sidebar";
import { Metadata } from "next";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Heba Hamdan Dashboard",
  };
export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){return(
        <>
        <div className="flex">
          <ToastContainer theme="dark"/>
            <Sidebar/>
            <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
           <h3 className="font-medium">Admin Panel</h3>
      <Image src="/profile_icon.png" width={45} height={45} alt="Heba" />

        </div>
        {children}
            </div>
          
        </div>
      
  
        </>
    )
}