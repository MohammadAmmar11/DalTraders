"use client";
import { Box, Button, Input, Text, HStack } from "@chakra-ui/react";
import React from "react";

export default function Newsletter() {
  return (
    <>
      <main className="mt-16">
        <Box className=" mx-20 py-10 bg-zinc-900">
          <HStack>
            <div className="ml-20">
              <Text className="text-3xl font-semibold font-sans text-white">
                SUBSCRIBE US NOW
              </Text>
              <Text className="mt-4 text-gray-300">
                Get latest news, updates and deals directly mailed to your
                inbox.
              </Text>
            </div>

            <div className="flex w-full max-w-sm items-center  ml-36 mt-5">
              <Input
                type="email"
                placeholder="Your Email Address Here"
                className="bg-white px-10 py-3 mt-2"
              />
              <Button
                type="submit"
                className=" bg-slate-600 px-8 py-3 mt-2 text-white font-light"
              >
                SUBSCRIBE
              </Button>
            </div>
          </HStack>
        </Box>
      </main>
    </>
  );
}
