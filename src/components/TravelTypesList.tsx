import { Container, Flex, Image, Text, Box } from "@chakra-ui/react"
import { TravelType } from "./TravelType"

export const TravelTypesList = () => {
  return (
    <Container maxW="1240px" mt="8" >
      <Flex
        flexDirection={["column", "row"]}
        justify="space-between"
        flexWrap="wrap"
        gridGap="6"
        w="100%">
        <TravelType image_url="/cocktail.svg" label="vida noturna" />
        <TravelType image_url="/surf.svg" label="praia" />
        <TravelType image_url="/building.svg" label="moderno" />
        <TravelType image_url="/museum.svg" label="clássico" />
        <TravelType image_url="/earth.svg" label="e mais..." />
      </Flex>
    </Container>
  )
}