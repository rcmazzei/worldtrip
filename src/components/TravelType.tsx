import { Container, Flex, Image, Text, Box } from "@chakra-ui/react"

interface TravelTypeProps {
  image_url: string;
  label: string;
}

export const TravelType = ({ image_url, label }: TravelTypeProps) => {
  return (
    <Flex direction={["row", "column"]} align="center" justify="center" flexWrap="wrap">
      <Image src={image_url} alt={label} w="85px" h="85px" />
      <Text
        color={'dark.text'}
        fontSize={"24px"}
        fontWeight="600"
      >
        {label}
      </Text>
    </Flex>
  )
}