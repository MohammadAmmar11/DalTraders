"use client";
import React from "react";
import { Box, Button, Input, Text, HStack, Divider } from "@chakra-ui/react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaDhl,
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
  FaRegCopyright 
} from "react-icons/fa";



export default function Footer() {
  return (
    <>
      <main className="mx-28 mt-44">
        <section >
          <HStack className="">
            <Box className=''>
              <div>
                <Text className="text-2xl font-semibold mt-2">DAL TRADERS</Text>
              </div>
              <div>
                <Text className="text-sm mt-4 text-gray-500">
                  Nisi, purus vitae, ultrices nunc. Sit <br /> ac sit suscipit
                  hendrerit. Gravida <br /> massa volutpat aenean odio erat{" "}
                  <br /> nullam fringilla.
                </Text>
              </div>

              <HStack className="space-x-3 mt-3 ">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
                <FaYoutube />
              </HStack>
            </Box>
            <Box className="px-10">
              <div>
                <Text className="mt-11 text-xl ">QUICK LINKS</Text>
                <ul className="mt-5 font-sans">
                  <li className="mt-2 hover:text-gray-500">
                    <Link href="/#">HOME</Link>
                  </li>
                  <li className="mt-2 hover:text-gray-500">
                    <Link href="/#">ABOUT</Link>
                  </li>
                  <li className="mt-2 hover:text-gray-500">
                    <Link href="/#">SHOP</Link>
                  </li>
                  <li className="mt-2 hover:text-gray-500">
                    <Link href="/#">BLOGS</Link>
                  </li>
                  <li className="mt-2 hover:text-gray-500">
                    <Link href="/#">CONTACT</Link>
                  </li>
                </ul>
              </div>
            </Box>
            <Box className="px-10">
              <div>
                <Text className="mt-11 text-xl font-sans ">
                  HELP & INFO HELP
                </Text>
                <ul className="mt-5 font-sans">
                  <li className="mt-2 hover:text-gray-500">
                    <Link href="/#">TRACK YOUR ORDER</Link>
                  </li>
                  <li className="mt-2 hover:text-gray-500">
                    <Link href="/#">RETURNS POLICIES</Link>
                  </li>
                  <li className="mt-2 hover:text-gray-500">
                    <Link href="/#">SHIPPING + DELIVERY</Link>
                  </li>
                  <li className="mt-2 hover:text-gray-500">
                    <Link href="/#">CONTACT US</Link>
                  </li>
                  <li className="mt-2 hover:text-gray-500">
                    <Link href="/#">FAQS</Link>
                  </li>
                </ul>
              </div>
            </Box>
            <Box className="px-16">
              <div>
                <Text className="mt-15 text-xl">CONTACT US</Text>
                <Text className="mt-3 text-gray-400">
                  Do you have any queries or <br /> suggestions?{" "}
                  <Link href="#" className="text-blue-500 hover:underline">
                    yourinfo@gmail.com
                  </Link>
                </Text>
                <Text className="mt-4 text-gray-500">
                  If you need support? Just give us a <br /> call.
                  <Link href="#" className=" text-blue-500 hover:underline">
                    {" "}
                    +92 111 222 333 44
                  </Link>{" "}
                </Text>
              </div>
            </Box>
          </HStack>
        </section>
        <Divider orientation='horizontal' borderColor="black" borderWidth="2px"/>
        <section className="mt-10">
          <Box>
            <HStack className='flex items-center justify-between'>
        <div>
         <HStack> <Text>We Ship with:  </Text><FaDhl size='65'/> </HStack>
        </div>
        <div>
         <HStack> <Text>Payment Options:  </Text><FaCcMastercard  size='25'/> <FaCcVisa size='25'/><FaCcPaypal size='25'/></HStack>
        </div>

        <div>
          <HStack >
          <FaRegCopyright  color="gray"/>
            <Text>Copyright 2024 DAL TRADERS.</Text><br/>
            </HStack>
            <Text className="text-sm ml-7">Design by MOHAMMAD AMMAR</Text>
            </div>
       
            </HStack>
          </Box>
        </section>
      </main>
    </>
  );
}
