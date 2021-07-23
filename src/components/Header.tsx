import { Button, Box, Container, Flex, Image } from "@chakra-ui/react"
import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi';

export const Header = () => {
  const router = useRouter();

  return (
    <Container maxW="1240px">
      <Flex p="4" alignItems="center" justify="space-between">
        {
          router.asPath !== '/' ? (
            <Button variant="ghost" onClick={() => {
              router.back();
            }} >
              <FiChevronLeft size={32} />
            </Button>
          ) :
            <Box />
        }
        <Image src={'/logo.svg'} alt="Logo" />
        <Box />
      </Flex>
    </Container>
  )
}