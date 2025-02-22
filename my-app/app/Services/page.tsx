"use client";
import React from "react";
import Link from "next/link";
import { Box, Text, Image, HStack, Button } from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
import { SlBadge } from "react-icons/sl";
import { MdLocalOffer } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Services() {
  return (
    <>
      <main>
        <div id="services" className=" mt-24 text-xl font-sans mx-24">
          <HStack className="space-x-20 ml-10 ">
            <Box>
              <HStack>
                <GrCart size="30" /> <Text>FREE DELIVERY</Text>
              </HStack>
              <p className="ml-9 text-base">
                Lorem ipsum dolor,
                <br /> sit amet
              </p>
            </Box>
            <Box>
              <HStack>
                <SlBadge size="30" /> <Text>QUALITY GUARANTEE</Text>
              </HStack>
              <p className="ml-9 text-base">
                Lorem ipsum dolor,
                <br /> sit amet
              </p>
            </Box>
            <Box>
              <HStack>
                <MdLocalOffer size="30" />
                <Text>DAILY OFFERS</Text>
              </HStack>
              <p className="ml-9 text-base">
                Lorem ipsum dolor,
                <br /> sit amet
              </p>
            </Box>
            <Box>
              <HStack>
                <RiSecurePaymentLine size="30" /> <Text>SECURE PAYMENTS</Text>
              </HStack>
              <p className="ml-9 text-base">
                Lorem ipsum dolor, <br />
                sit amet
              </p>
            </Box>
          </HStack>
        </div>
      </main>
    </>
  );
}
