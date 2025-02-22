"use client";
import React from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Insta() {
  return (
    <>
      <main>
        <div className="mt-44">
          <div className="mx-32">
            <Text className="text-3xl font-sans font-semibold text-center">
              SHOP OUR INSTA
            </Text>
          </div>
          <Box className="text-xl">
            <HStack className="mt-10 mx-24">
              {/* Product 1 */}
              <Box className="relative px-3 group">
                <Image
                  src="/images/insta-item1.jpg"
                  width="500px"
                  height="200px"
                  alt="Product no 1"
                  className="w-full h-full"
                />
                <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-5xl text-gray">
                  <FaInstagram  />
                  </div>
                </Box>
              </Box>
              {/* Product 2 */}
              <Box className="relative px-3 group">
                <Image
                  src="/images/insta-item2.jpg"
                  width="500px"
                  height="200px"
                  alt="Product no 2"
                  className="w-full h-full"
                />
                <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-5xl text-gray">
                  <FaInstagram  />
                  </div>
                </Box>
              </Box>
              {/* Product 3 */}
              <Box className="relative px-3 group">
                <Image
                  src="/images/insta-item3.jpg"
                  width="500px"
                  height="200px"
                  alt="Product no 3"
                  className="w-full h-full"
                />
                <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-5xl text-gray">
                  <FaInstagram  />
                  </div>
                </Box>
              </Box>
              {/* Product 4 */}
              <Box className="relative px-3 group">
                <Image
                  src="/images/insta-item4.jpg"
                  width="500px"
                  height="200px"
                  alt="Product no 4"
                  className="w-full h-full"
                />
                <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-5xl text-gray">
                  <FaInstagram  />
                  </div>
                </Box>
              </Box>
              {/* Product 5 */}
              <Box className="relative px-3 group">
                <Image
                  src="/images/insta-item5.jpg"
                  width="500px"
                  height="200px"
                  alt="Product no 5"
                  className="w-full h-full"
                />
                <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-5xl text-gray">
                  <FaInstagram  />
                  </div>
                </Box>
              </Box>
            </HStack>
          </Box>
        </div>
      </main>
    </>
  );
}
