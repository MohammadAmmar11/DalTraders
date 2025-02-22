"use client";

import { Box, HStack, Image, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";


export default function Watches() {
  return (
    <>
      <main>
      <div id="watches" className="mt-44">
        <div className="mx-32">
          <HStack justifyContent="space-between">
            <Text className="text-3xl font-sans font-semibold">SMART WATCHES</Text>
            <Link href="/#">
              <Text className="">SHOP NOW</Text>
            </Link>
          </HStack>
        </div>

        <Box className="text-xl">
          <HStack className="mt-10 mx-24">
            {/* Product 1 Starts */}
            <Box className="relative px-3 group">
              <Image
                src="/images/watch-1.jpg"
                width=""
                height=""
                alt="Product no 1"
                className="w-full h-full"
              />
              <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-zinc-800 text-white py-2 px-7 text-base font-sans rounded">ADD TO CART  </button>
              </Box>
              <HStack justifyContent="space-between" className="mt-4">
                <Text>PINK WATCH</Text>
                <Text className="text-blue-500">$684</Text>
              </HStack>
            </Box>
            {/* Product 1 Ends */}

            {/* Product 2 Starts */}
            <Box className="relative px-3 group">
              <Image
                src="/images/watch-2.jpg"
                width=""
                height=""
                alt="Product no 2"
                className="w-full h-full"
              />
              <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-zinc-800 text-white py-2 px-7 text-base font-sans rounded">ADD TO CART</button>
              </Box>
              <HStack justifyContent="space-between" className="mt-4">
                <Text>HEAVY WATCH</Text>
                <Text className="text-blue-500">$1500</Text>
              </HStack>
            </Box>
            {/* Product 2 Ends */}

            {/* Product 3 Starts */}
            <Box className="relative px-3 group">
              <Image
                src="/images/watch-3.jpg"
                width=""
                height=""
                alt="Product no 3"
                className="w-full h-full"
              />
              <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-zinc-800 text-white py-2 px-7 text-base font-sans rounded">ADD TO CART</button>
              </Box>
              <HStack justifyContent="space-between" className="mt-4">
                <Text>SPOTTED WATCH</Text>
                <Text className="text-blue-500">$398</Text>
              </HStack>
            </Box>
            {/* Product 3 Ends */}

            {/* Product 4 Starts */}
            <Box className="relative px-3 group">
              <Image
                src="/images/watch-4.jpg"
                width=""
                height=""
                alt="Product no 4"
                className="w-full h-full"
              />
              <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-zinc-800 text-white py-2 px-7 text-base font-sans rounded">ADD TO CART</button>
              </Box>
              <HStack justifyContent="space-between" className="mt-4">
                <Text>BLACK WATCH</Text>
                <Text className="text-blue-500">$834</Text>
              </HStack>
            </Box>
            {/* Product 4 Ends */}
          </HStack>
        </Box>
      </div>
    </main>
    </>
  );
}
