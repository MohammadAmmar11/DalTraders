'use client'
import Image from "next/image";
import Header from "@/app/Header/page"
import Hero from "./Hero/page"
import Services from "./Services/page"
import Products from "./Products/page"
import Watches from "./Watches/page"
import Sales from "./Sales/page"
import Blogs from "./Blogs/page"
import Testimonials from "./Testimonials/page"
import Newsletter from "./Newsletter/page";
import Insta from "./Insta/page"
import Footer from "./Footer/page"

export default function Home() {
  return (
    <>
    <Header/>
   <Hero/>
   <Services/>
   <Products/>
   <Watches/>
   <Sales/>
   <Blogs/>
   <Testimonials/>
   <Newsletter/>
   <Insta/>
   <Footer/>
    </>
  ) 
}
