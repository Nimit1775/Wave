import { Flex, Image, useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Fixed typo in toggleColorMode

  return (
    <Flex justifyContent="center" mt={6} mb={12}> {/* Use consistent syntax */}
      <Image
        cursor="pointer"
        alt="logo"
        w={6}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode} // Corrected the function name
      />
    </Flex>
  );
};

export default Header;
