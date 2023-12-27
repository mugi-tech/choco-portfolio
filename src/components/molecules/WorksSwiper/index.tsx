import Image from "next/image";
import Link from "next/link";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Text from "../../atoms/Text";
import Box from "../../layout/Box";
import { WorksDataListProps } from "../../organisms/Works";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./WorksSwiper.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const WorksSwiper = ({ worksDataList }: WorksDataListProps) => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        loop={true}
      >
        {worksDataList.map((worksData, i) => {
          return (
            <Link href={`/works/${worksData.id}`} key={i}>
              <a>
                <SwiperSlide key={i}>
                  <Image
                    src={worksData.thumbnail}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                  />
                  <Box className="s-fade-back" backgroundColor="black" />
                  <Text
                    className="s-fade-text"
                    color="white"
                    fontSize="Large"
                    paddingLeft={2}
                    paddingRight={2}
                  >
                    {worksData.description}
                  </Text>
                </SwiperSlide>
              </a>
            </Link>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorksSwiper;
