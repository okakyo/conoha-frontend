import React from "react";
import { Meta, Story } from "@storybook/react";
import { LoadingSpinner } from "../../../src/components/organisms/utils/spinner";
import { ChakraProvider } from "@chakra-ui/react";

export default {
  title: "Organisms/Spinner",
  components: LoadingSpinner,
} as Meta;

const Template = (args) => (
  <ChakraProvider>
    <LoadingSpinner {...args}></LoadingSpinner>
  </ChakraProvider>
);
export const IndexCard = Template.bind({});
