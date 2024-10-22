import { Sidebar } from "@/Components/AdminComponents/Sidebar";
import { Metadata } from "next";
import Image from "next/image";
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
            <Sidebar/>
            <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
           <h3 className="font-medium">Admin Panel</h3>
      <Image src="/profile_icon.png" width={50} height={50} alt="Heba" />

        </div>
        {children}
        </div>
      
  
        </>
    )
}