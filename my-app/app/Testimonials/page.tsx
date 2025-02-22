"use client";
import {
  Box,
  HStack,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Testimonials() {
  return (
    <>
      <main className="mt-40 ">
       <Text className="text-4xl font-semibold text-center">Customer&apos;s Feedback</Text>
        <Box className="ml-24 mt-10">
          <HStack>
        
            {/* Testimonial 1 start */}
            <Box className="mx-32">
              <div className="flex justify-center">
                <Image
                  className=""
                  src="/images/Stars.png"
                  width="200px"
                  height=""
                  alt="Testimonial 1"
                />
              </div>

              <div className=" mt-3 text-center">
                <Text>
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Inventore, eius repellendus <br />
                  possimus unde explicabo quasi{" "}
                </Text>
                <Text className="mt-4 font-serif"> Michael Johnson</Text>
              </div>
            </Box>
            {/* Testimonial 1 end */}

            {/* Testimonial 2 starts */}
            <Box className="mx-32">
              <div className="flex justify-center">
                <Image
                  className=""
                  src="/images/Stars.png"
                  width="200px"
                  height=""
                  alt="Testimonial 1"
                />
              </div>
              <div className=" mt-3 text-center">
                <Text>
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Inventore, eius repellendus <br /> possimus unde
                  explicabo quasi{" "}
                </Text>
                <Text className="mt-4 font-serif">Sophie Williams</Text>
              </div>
            </Box>
            {/* Testimonial 2 end */}
          </HStack>
          {/* Testimonial 3 start */}

          <HStack className="mt-16">
            <Box className="mx-32">
              <div className="flex justify-center">
                <Image
                  className=""
                  src="/images/Stars.png"
                  width="200px"
                  height=""
                  alt="Testimonial 1"
                />
              </div>
              <div className=" mt-3 text-center">
                <Text>
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Inventore, eius repellendus <br /> possimus unde
                  explicabo quasi{" "}
                </Text>
                <Text className="mt-4 font-serif"> Emily Brown</Text>
              </div>
            </Box>
            {/* Testimonial 3 end */}

            {/* Testimonial 4 start */}
            <Box className="mx-32">
              <div className="flex justify-center ">
                <Image
                  className=""
                  src="/images/Stars.png"
                  width="200px"
                  height=""
                  alt="Testimonial 1"
                />
              </div>
              <div className=" mt-3 text-center">
                <Text>
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Inventore, eius repellendus <br /> possimus unde
                  explicabo quasi{" "}
                </Text>
                <Text className="mt-4 font-serif"> John Smith</Text>
              </div>
            </Box>
            {/* Testimonial 4 end */}
          </HStack>
        </Box>
      </main>
    </>
  );
}
