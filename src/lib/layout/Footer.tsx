import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
    >
      <Text fontSize="small">
        {new Date().getFullYear()} &copy;{' '}
        <a href="https://pocketsflow.com" target="_blank" rel="noreferrer">
          PocketsFlow
        </a>
      </Text>
    </Flex>
  );
};

export default Footer;
