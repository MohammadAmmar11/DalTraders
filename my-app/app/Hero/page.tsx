"use client";
import { Box, Text, Image, HStack, Button } from "@chakra-ui/react";
import React from "react";

export default function Hero() {
  return (
    <>
      <main className="  ">
        <Box className="bg-neutral-100">
          <HStack className="space-x-10">
            <Box className="-mt-10">
              <div className=" mx-28 ">
                <Text className="  font-light text-7xl font-sans">
                  YOUR <br />
                  PRODUCTS ARE <br /> GREAT.
                </Text>
              </div>
              <div className="ml-28 mt-16">
                <Button className=" bg-gray-900 text-sky-100 px-14 py-3 text-2xl ">
                  SHOP NOW
                </Button>
              </div>
            </Box>
            <div className=''>
              <Image className='-mt-14'
                src="/images/banner-image.png"
                width=""
                alt=""
                height="600"
              />
            </div>
          </HStack>
          ;
        </Box>
      </main>
    </>
  );
}
