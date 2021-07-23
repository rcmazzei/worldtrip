import { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypesList } from "../components/TravelTypesList";
import { api } from "../services/api";
import { Box, Center, Flex, Text, Image, Icon } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ContinentSlide } from "../components/ContinentSlide";

interface Continent {
  id: string;
  name: string;
  image_url: string;
}

interface ResponseData {
  continents: Continent[];
}

export default function Home() {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    api.get<ResponseData>('/continents', {
      // params: {
      //   continent_id: 2
      // }
    })
      .then(response => setContinents(response.data.continents));
    // .then(response => console.log(response.data));
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <TravelTypesList />
      <Box textAlign="center" mt="20">
        <Text
          color={'dark.text'}
          fontSize={"36px"}
          fontWeight={"500"}
        >
          Vamos Nessa?
        </Text>
        <Text
          color={'dark.text'}
          fontSize={"36px"}
          fontWeight={"500"}
        >
          Então escolha seu continente
        </Text>
      </Box>
      <Box my="6">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            continents?.map((continent, index) => {
              return (
                <SwiperSlide key={continent.id} >
                  <ContinentSlide
                    id={continent.id}
                    image_url={continent.image_url}
                    showPrevButton={(index + 1) !== 1}
                    showNextButton={(index + 1) !== continents.length} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </Box>
    </>
  )
}
