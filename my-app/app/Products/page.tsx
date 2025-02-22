"use client";
import React from "react";
import Link from "next/link";
import {
  Text,
  HStack,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

export default function Products() {
  return (
    <>
      <main>
        <div id="products" className="mt-44 ">
          <div className="mx-32">
            <HStack justifyContent="space-between">
              <Text className="text-3xl font-sans font-semibold">
                MOBILE PRODUCTS
              </Text>
              <Link href="/#">
                <Text className="">SHOP NOW</Text>
              </Link>
            </HStack>
          </div>

          <Box className=" text-xl ">
            <HStack className=" mt-10 mx-24 ">
              {/* Product 1 Starts */}

              <Box className="relative px-3 group ">
                <Image
                  src="/images/iphone-x.jpg"
                  width=""
                  height=""
                  alt="Product no 1"
                  className="w-full h-full"
                />
                <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-zinc-800 text-white py-2 px-7 text-base font-sans rounded">
                    ADD TO CART{" "}
                  </button>
                </Box>
                <HStack justifyContent="space-between " className="mt-4">
                  <Text>IPHONE X </Text>
                  <Text className="text-blue-500">$999 </Text>
                </HStack>
              </Box>
              {/* Product 1 Ends */}

              {/* Product 2 Starts */}

              <Box className="relative px-3 group">
                <Image
                  src="/images/iphone-11.jpg"
                  width=""
                  height=""
                  alt="Product no 2"
                />
                <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-zinc-800 text-white py-2 px-7 text-base font-sans rounded">
                    ADD TO CART
                  </button>
                </Box>
                <HStack justifyContent="space-between" className="mt-4">
                  <Text>IPHONE 11 </Text>
                  <Text className="text-blue-500">1500$ </Text>
                </HStack>
              </Box>
              {/* Product 2 Ends */}

              {/* Product 3 Starts */}

              <Box className="relative px-3 group">
                <Image
                  src="/images/iphone-8.jpg"
                  width=""
                  height=""
                  alt="Product no 3"
                />
                <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-zinc-800 text-white py-2 px-7 text-base font-sans rounded">
                    ADD TO CART
                  </button>
                </Box>
                <HStack justifyContent="space-between" className="mt-4">
                  <Text>IPHONE 8 </Text>
                  <Text className="text-blue-500">300$ </Text>
                </HStack>
              </Box>
              {/* Product 3 Ends */}

              {/* Product 4 Starts */}

              <Box className="relative px-3 group">
                <Image
                  src="/images/iphone-13.jpg"
                  width=""
                  height=""
                  alt="Product no 4"
                />
                <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-zinc-800 text-white py-2 px-7 text-base font-sans rounded">
                    ADD TO CART
                  </button>
                </Box>
                <HStack justifyContent="space-between" className="mt-4">
                  <Text>IPHONE 13 </Text>
                  <Text className="text-blue-500">2000$ </Text>
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
