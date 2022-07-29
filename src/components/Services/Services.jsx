import React from "react";
import Image from "next/image";
import style from "./Services.module.scss";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import photoCarousel from "../../assets/jpg/carousel2.jpg";
import photoCarousel2 from "../../assets/jpg/main.jpg";
import photoCarousel3 from "../../assets/jpg/mainBackground.jpg";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const Services = () => {
  const isTablet = useMediaQuery("(max-width: 1200px)");
  const isMinTablet = useMediaQuery("(max-width: 860px)");
  const isPhone = useMediaQuery("(max-width: 480px)");

  return (
    <div className={style.wrapper}>
      <div className="container">
        <motion.h3
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          Our Service
        </motion.h3>
        <motion.div
          className={style.header}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <h2>
            What services <span className={"greenContent"}>we offer</span>?
          </h2>
          <span className={style.typography}>
            <p>Data science + Data mining + Open-Data.</p>
          </span>
        </motion.div>

        <motion.div
          className={style.slider}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <Swiper
            slidesPerView={(isMinTablet && 1) || (3 && isTablet && 2) || 3}
            spaceBetween={30}
            loop={true}
            navigation={!isPhone}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className={style.item}>
              <div className={style.upper}>
                <Image src={photoCarousel} alt={"img"}/>
              </div>
              <div className={style.lower}>
                <div className={style.circle}>
                  <PowerSettingsNewIcon sx={{ fontSize: 50 }} />
                </div>
                <h3>IT partnership.</h3>
                <p>Outsourcing of our IT specialists for different tasks.</p>
                <p>Outstaffing of our IT specialists for different tasks.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.item}>
              <div className={style.upper}>
                <Image src={photoCarousel2} alt={"img"}/>
              </div>
              <div className={style.lower}>
                <div className={style.circle}>
                  <PowerSettingsNewIcon sx={{ fontSize: 50 }} />
                </div>
                <h3>Development of Web and mobile applications.</h3>
                <p>Mobile applications (iOS, Android).</p>
                <p>Major Internet portals and platforms.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.item}>
              <div className={style.upper}>
                <Image src={photoCarousel3} alt={"img"}/>
              </div>
              <div className={style.lower}>
                <div className={style.circle}>
                  <PowerSettingsNewIcon sx={{ fontSize: 50 }} />
                </div>
                <h3>Enterprise software development.</h3>
                <p>CRM systems.</p>
                <p>ERP systems.</p>
                <p>
                  Any other IT product developed taking into account all your
                  wishes.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        <div className={style.btn}>
          <a>View all services</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
