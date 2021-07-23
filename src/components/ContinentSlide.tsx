import { Flex, Box, Icon, Text, Link as ChakraLink } from '@chakra-ui/react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';

interface ContinentSlideProps {
  id: string;
  image_url: string;
  name?: string;
  showPrevButton: boolean;
  showNextButton: boolean;
}

export const ContinentSlide = ({ id, image_url, name, showPrevButton, showNextButton }: ContinentSlideProps) => {
  return (
    <Link href={`/continent/${id}`} passHref>
      <ChakraLink>
        <Flex
          maxW="1240px"
          mx="auto"
          height="650px"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            backgroundImage={image_url}
            backgroundSize="cover"
            width="100%"
            height="100%"
          >
            {/* <Image
        objectFit="cover"
        src="/africa.jpg"
        alt="Africa"
      /> */}
            <Flex
              alignItems="center"
              justifyContent="space-between"
              p="8"
              h="100%">
              <Box>
                {
                  showPrevButton &&
                  <Icon as={FiChevronLeft} color={'highlight'} w="10" h="10" />
                }
              </Box>
              <Text
                color={'light.text'}
                fontSize={"36px"}
                fontWeight={"500"}
              >
                {name || ''}
              </Text>
              <Box>
                {
                  showNextButton &&
                  <Icon as={FiChevronRight} color={'highlight'} w="10" h="10" />
                }
              </Box>
            </Flex>
          </Box>
        </Flex>
      </ChakraLink>
    </Link>
  )
}