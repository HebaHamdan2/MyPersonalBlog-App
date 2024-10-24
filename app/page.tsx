'use client'
import { BlogLsit } from "@/Components/BlogLsit";
import { Footer } from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
 <>
 <ToastContainer theme="dark"/>
<Header/>
<BlogLsit/>
<Footer/>
 </>
  );
}
