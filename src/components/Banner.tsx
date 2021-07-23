import { Box, Image, Text, Container, useBreakpointValue } from "@chakra-ui/react"

export const Banner = () => {
  const desktop = useBreakpointValue({ lg: true });

  return (
    <Box position="relative">
      <Image src={'/background.png'} alt="Background" height="330px" />
      <Box position="absolute" top="6" left="0" width="100%">
        <Container maxW="1240px" pt="6" position="relative">
          <Text
            color={'light.text'}
            fontSize={"36px"}
            fontWeight={"500"}
          >
            5 continentes
          </Text>
          <Text
            color={'light.text'}
            fontSize={"36px"}
            fontWeight={"500"}
            mb="6"
          >
            infinitas possibilidades
          </Text>
          <Text
            color={'light.info'}
            fontSize={"20px"}
            fontWeight="400"
          >
            Chegou a hora de tirar do papel a viagem
          </Text>
          <Text
            color={'light.info'}
            fontSize={"20px"}
            fontWeight="400"
          >
            que você sempre sonhou.
          </Text>
          {
            desktop && (
              <Box position="absolute" right="0" top="8">
                <Image src="/airplane.svg" alt="Airplane" />
              </Box>
            )
          }
        </Container>
      </Box>
    </Box>
  )
}