"use client";
import React from "react";
import Link from "next/link";
import { Box, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";


export default function Blogs() {
  return (
    <>
      <main><div id="blogs" className="mt-44 ">
          <div className="mx-32">
            <HStack justifyContent="space-between">
              <Text className="text-3xl font-sans font-semibold">
                LATEST POSTS
              </Text>
              <Link href="/#">
                <Text className="">READ BLOG</Text>
              </Link>
            </HStack>
          </div>

          <Box className=" text-xl ">
            <HStack className=" mt-10 mx-24 ">
              {/* Product 1 Starts */}

              <Box className="px-3">
                <Image
                  src="/images/blog1.jpg"
                  width="500"
                  height="500"
                  alt="Product no 1"
                />
                <div>
                  <Text className="text-sm mt-3">FEB 22&apos;2024 - GADGETS </Text>
                  <Text className='font-sans mt-1'>GET SOME COOL GADGETS IN 2023 </Text>
                </div>
                
              </Box>x
              {/* Product 1 Ends */}

              {/* Product 2 Starts */}

              <Box className="px-3">
                <Image
                  src="/images/blog2.jpg"
                  width="500"
                  height="500"
                  alt="Product no 2"
                />
                 <div>
                  <Text className="text-sm mt-3">FEB 28&apos;2024 - TECHNOLOGY</Text>
                  <Text className='font-sans mt-1'>TECHNOLOGY HACK YOU WON&apos;T GET </Text>
                </div>
              </Box>
              {/* Product 2 Ends */}

              {/* Product 3 Starts */}

              <Box className="px-3">
                <Image
                  src="/images/blog3.jpg"
                  width="500"
                  height="500"
                  alt="Product no 3"
                />
                <div>
                  <Text className="text-sm mt-3">MARCH 02&apos;2024 - CAMERA </Text>
                  <Text className='font-sans mt-1'>TOP 10 SMALL CAMERA IN THE WORLD </Text>
                </div>
              </Box>
              {/* Product 3 Ends */}
            </HStack>
          </Box>
        </div> </main>
    </>
  );
}
