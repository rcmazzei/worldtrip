import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container, Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface Continent {
  id: string;
  name: string;
  image_url: string;
  countries: number;
  cities: number;
  languages: number;
  description: string;
}

interface City {
  id: string;
  name: string;
  country_name: string;
  image_url: string;
  country_flag_image_url: string;
}

interface ResponseContinentsData {
  continents: Continent[];
}

interface ResponseCitiesData {
  cities: City[];
}

export default function Continent() {
  const [continent, setContinent] = useState<Continent>({} as Continent);
  const [cities, setCities] = useState<City[]>([]);

  const { query: { id } } = useRouter();

  useEffect(() => {
    api.get<ResponseContinentsData>(`/continents/${id}`)
      .then(response => setContinent(response.data.continents[0]));

    api.get<ResponseCitiesData>(`/cities/`, {
      params: {
        continent_id: id
      }
    })
      .then(response => setCities(response.data.cities));
  }, [id]);

  if (!continent) return null;

  return (
    <>
      <Header />
      <Box>
        <Image
          alt={continent.name}
          src={continent.image_url}
          w="100%"
          h="500px"
          objectFit="cover"
        />
      </Box>
      <Container maxW="1240px" pt="6">
        <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Flex flex="2">
            <Text
              color={'dark.text'}
              fontSize={"24px"}
              fontWeight={"400"}
            >
              {continent.description}
            </Text>
          </Flex>
          <Flex flex="1">
            <Flex flexDir="column" px="6" alignItems="center">
              <Text
                color={'highlight'}
                fontSize={"48px"}
                fontWeight={"600"}
              >
                {continent.countries}
              </Text>
              <Text
                color={'dark.text'}
                fontSize={"24px"}
                fontWeight={"600"}
              >
                países
              </Text>
            </Flex>
            <Flex flexDir="column" px="6">
              <Text
                color={'highlight'}
                fontSize={"48px"}
                fontWeight={"600"}
              >
                {continent.languages}
              </Text>
              <Text
                color={'dark.text'}
                fontSize={"24px"}
                fontWeight={"600"}
              >
                línguas
              </Text>
            </Flex>
            <Flex flexDir="column" px="6">
              <Text
                color={'highlight'}
                fontSize={"48px"}
                fontWeight={"600"}
              >
                {continent.cities}
              </Text>
              <Text
                color={'dark.text'}
                fontSize={"24px"}
                fontWeight={"600"}
              >
                cidades
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box pt="8">
          <Text
            color={'dark.text'}
            fontSize={"36px"}
            fontWeight={"500"}
          >
            Cidades +100
          </Text>
          <Flex
            alignItems="center"
            justifyContent={{ base: 'center', md: 'flex-start' }}
            flexWrap="wrap"
            gridGap="10"
            mb="6"
          >
            {
              cities && cities.length > 0 && (
                cities.map(city => (
                  <Box
                    w="256px"
                    h="279px"
                    borderRadius="6"
                    borderWidth="1px"
                    overflow="hidden"
                    key={city.id}
                  >
                    <Image
                      alt={city.name}
                      src={city.image_url || continent.image_url}
                      h="173px"
                      w="100%"
                      objectFit="cover"
                    />
                    <Box p="6">
                      <Flex alignItems="center" justifyContent="space-between">
                        <Flex flexDirection="column">
                          <Text
                            color={'dark.text'}
                            fontSize={"20px"}
                            fontWeight={"500"}
                          >
                            {city.name}
                          </Text>
                          <Text
                            color={'dark.info'}
                            fontSize={"16px"}
                            fontWeight={"500"}
                          >
                            {city.country_name}
                          </Text>
                        </Flex>
                        <Flex>
                          <Image
                            alt={city.country_name}
                            src={city.country_flag_image_url}
                            borderRadius="full"
                            boxSize="30px"
                            objectFit="cover"
                          />
                        </Flex>
                      </Flex>
                    </Box>
                  </Box>
                ))
              )
            }
          </Flex>
        </Box>
      </Container>
    </>
  )
}