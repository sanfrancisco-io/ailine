import Image from 'next/image';
import React from 'react';
import cl from './Footer.module.scss';
import location from '../../assets/icons/001-location.png';
import call from '../../assets/icons/003-phone-call.png';
import web from '../../assets/icons/002-world-wide-web.png';
import first from '../../assets/1.jpg';
import second from '../../assets/2.jpg';
import third from '../../assets/3.jpg';
import fourth from '../../assets/4.jpg';
import fifth from '../../assets/5.jpg';
import sixth from '../../assets/6.jpg';
import { motion } from 'framer-motion';
const image = [first, second, third, fourth, fifth, sixth];

const Footer = () => {
    return (
        <div className={cl.footer}>
            <div

                className={cl.footer_inner}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                    className={cl.first}>
                    <h2>AILINE</h2>
                    <p>WE LOOK FOR A FAST ANSWER FROM YOU!   <br />
                        We will be glad to cooperate with you .</p>
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                    className={cl.second}>
                    <h2>Quick Links</h2>
                    <p>– Customers Services</p>
                    <p>– T Department</p>
                    <p>– About Our Company</p>
                    <p>– Business Growth</p>
                    <p>– Make An Appointment</p>
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                    className={cl.third}>
                    <h2>Our Contacts</h2>
                    <div className={cl.third_blocks}>
                        <div className={cl.third_blocks_img_block} style={{ width: "40px" }}>
                            <Image src={location} alt={"img"}/>
                        </div>
                        <p>Address: <a href="https://www.google.com/maps/@42.8631099,74.5776766,12z">
                            Kyrgyzstan, Bishkek city </a></p>
                    </div>
                    <div className={cl.third_blocks}>
                        <div className={cl.third_blocks_img_block}>
                            <Image src={call} alt={"img"}/>
                        </div>
                        <p>Phone: <a href="tel:+996 (555) 999 953">+996 (555) 999 953</a>
                            <br />
                            Fax: +996 (555) 999 953 </p>
                    </div>
                    <div className={cl.third_blocks}>
                        <div className={cl.third_blocks_img_block}>
                            <Image src={web} alt={"img"}/>
                        </div>
                        <p>Email: <a href="mailto: ailinecompany.kg@gmail.com"> ailinecompany.kg@gmail.com</a>
                            <br />
                            Website: yourwebsite.com</p>
                    </div>
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                    className={cl.fourth}>
                    <h2>Our Gallery</h2>
                    <div className={cl.fourth_inner}>
                        {image.map((item, index) => (
                            <div key={index}>
                                <Image src={item} alt={"img"}/>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Footer;