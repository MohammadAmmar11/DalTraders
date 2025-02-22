"use client";
import { Box,Button,HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Sales() {
  return (
    <>
      <main id='sales'> 
      <Box className="bg-neutral-100 mt-48 ">
          <HStack className="">
            <Box className="ml-56  -mt-28">
                <div>
                    <Text className="font-semibold text-lg">10% OFF</Text>
                </div>
              <div className=" mt-4 ">
                <Text className=" font-thin text-7xl ">
                  NEW YEAR <br />
                 SALE 
                </Text>
              </div>
              <div className="mt-10">
                <Button className=" bg-gray-900 text-sky-100 px-14 py-3 text-2xl ">
                  SHOP NOW
                </Button>
              </div>
            </Box>
            <div className='ml-48'>
              <Image className='-mt-44'
                src="/images/Sales-pic.png"
                width="500px"
                alt=""
                height="800px"
              />
            </div>
          </HStack>
        </Box>
      </main>
    </>
  );
}
