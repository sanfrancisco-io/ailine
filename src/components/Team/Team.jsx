import React from "react";
import Image from "next/image";
import style from "./Team.module.scss";
import photoCarousel from "../../assets/jpg/carousel2.jpg";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import photoCarousel2 from "../../assets/jpg/main.jpg";
import photoCarousel3 from "../../assets/jpg/mainBackground.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Modal from "@mui/material/Modal";
import TerminalIcon from "@mui/icons-material/Terminal";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";

const styleForModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Team = () => {
  const isTablet = useMediaQuery("(max-width: 1200px)");
  const isMinTablet = useMediaQuery("(max-width: 860px)");
  const isPhone = useMediaQuery("(max-width: 480px)");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={style.wrapper}>
      <div className={style.backgroundBlock}>
        <div className={"container"}>
          <motion.h3
            className={style.title}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            Our Employees
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
              Let&apos;s go <span className={"greenContent"}>to know our</span> team
            </h2>
            <span className={style.typography}>
              <p>
                And today we are ready to create together with you and for you!
              </p>
            </span>
          </motion.div>
        </div>
      </div>
      <motion.div
        className={style.sliderBlock}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <div className="container">
          <Swiper
            slidesPerView={(isMinTablet && 1) || (3 && isTablet && 2) || 3}
            spaceBetween={30}
            loop={true}
            navigation={!isPhone}
            modules={[Navigation]}
            className={style.mySwiper}
          >
            <SwiperSlide className={style.item} onClick={() => handleOpen()}>
              <div className={style.upper}>
                <div className={style.socials}>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </div>
                <div className={style.greenBackground} />
                {/*<Image src={photoCarousel} />*/}
                <PersonIcon sx={{ fontSize: "300px", color: "#ffc501" }} />
              </div>
              <div className={style.lower}>
                <div className={style.circle}>
                  <TerminalIcon sx={{ fontSize: 50 }} />
                </div>
                <h3>Surmali Yusupov.</h3>
                <p>Senior Back-end Developer.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.item}>
              <div className={style.upper}>
                <div className={style.socials}>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </div>
                <div className={style.greenBackground} />

                {/*<Image src={photoCarousel} />*/}
                <PersonIcon sx={{ fontSize: "300px", color: "#ffc501" }} />
              </div>
              <div className={style.lower}>
                <div className={style.circle}>
                  <ViewQuiltIcon sx={{ fontSize: 50 }} />
                </div>
                <h3>Erlan Artykbaev.</h3>
                <p>Middle front-end developer.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.item}>
              <div className={style.upper}>
                <div className={style.socials}>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </div>
                <div className={style.greenBackground} />

                {/*<Image src={photoCarousel} />*/}
                <PersonIcon sx={{ fontSize: "300px", color: "#ffc501" }} />
              </div>
              <div className={style.lower}>
                <div className={style.circle}>
                  <TerminalIcon sx={{ fontSize: 50 }} />
                </div>
                <h3>Amangeldiev Ulukman.</h3>
                <p>Middle Back-end Developer.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.item}>
              <div className={style.upper}>
                <div className={style.socials}>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </div>
                <div className={style.greenBackground} />

                {/*<Image src={photoCarousel} />*/}
                <PersonIcon sx={{ fontSize: "300px", color: "#ffc501" }} />
              </div>
              <div className={style.lower}>
                <div className={style.circle}>
                  <PhoneIphoneIcon sx={{ fontSize: 50 }} />
                </div>
                <h3>Nurbek Batyrzhan.</h3>
                <p>Middle Flutter Developer.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.item}>
              <div className={style.upper}>
                <div className={style.socials}>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </div>
                <div className={style.greenBackground} />

                {/*<Image src={photoCarousel} />*/}
                <PersonIcon sx={{ fontSize: "300px", color: "#ffc501" }} />
              </div>
              <div className={style.lower}>
                <div className={style.circle}>
                  <TerminalIcon sx={{ fontSize: 50 }} />
                </div>
                <h3>Boiko Lev.</h3>
                <p>Middle Back-end Developer.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleForModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Team;
