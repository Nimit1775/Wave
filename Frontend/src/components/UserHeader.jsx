import { VStack, Box, Flex, Avatar, Text, Link } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
const UserHeader = () => {
  return (
    <VStack spacing={4} align="stretch"> {/* Added spacing and alignment */}
      <Flex justifyContent="space-between" w="full">
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Mark Zuckerberg
          </Text>
          <Flex gap={2} alignItems="center">
            <Text fontSize="sm">markzuckerberg</Text>
            <Text
              fontSize="xs"
              bg="gray.dark" 
              color="gray.light" 
              p={1}
              borderRadius="full"
            >
              threads.next
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name="Mark Zuckerberg"
            src="/zuck-avatar.png"
            size="xl"
          />
        </Box>
      </Flex>
      <Text>
        Lorem ipsum dolor sit amet.
      </Text>
      <Flex w= {"full"} justifyContent="space-between">
        <Flex gap={2} alignItems="center">
          <Text color="gray.light">3.2k followers</Text> 
          <Box w='1' h='1' bg={"gray.light"} borderRadius={"full"}></Box>  
          <Link color="gray.light" href="https://instagram.com" isExternal> 
            instagram.com
          </Link>
        </Flex>
        <Flex>
            <Box className="icon-container">
                <BsInstagram  size={24} cursor={"pointer"}/>
            </Box>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
