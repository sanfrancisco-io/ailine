import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import style from "./MainSlider.module.scss";
import PhotoForSlide1 from "../../assets/jpg/mainBackground.jpg";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const MainSlider = () => {
  const isMinTablet = useMediaQuery("(max-width: 860px)");
  return (
    <div className={style.swiperBlock}>
      <Swiper
        navigation={!isMinTablet}
        modules={[Navigation]}
        className={style.swiper}
      >
        <SwiperSlide className={style.swiperItem}>
          <div className={style.background} />
          <div className={"container"}>
            <div className={style.content}>
              <motion.h1
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                Your reliable partner!
              </motion.h1>
              <motion.h3
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                «AILINE LLC» is a generator of useful and unique IT solutions
                for medium and large businesses, as well as the community
                high-class IT-specialists ready to unload your company through
                cooperation in the format of outsourcing and outstaffing.
              </motion.h3>
              <motion.a
                href="#"
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 1 }}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                Contact us
              </motion.a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperItem}>
          <div className={style.background} />
          <div className={"container"}>
            <div className={style.content}>
              <h1>Ваш надежный партнер!</h1>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci, labore. Lorem ipsum dolor <br /> sit amet, consectetur
                adipisicing elit. Laborum, rerum.
              </h3>
              <a href="#">Contact us</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
