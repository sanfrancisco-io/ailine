import React from "react";
import Image from "next/image";
import cl from "./Form.module.scss";
import icon from "../../assets/contact-icon.png";
import { motion } from 'framer-motion';
const Form = () => {
  return (
    <div className={cl.form}>
      <div className={cl.largest_inner}>
        <motion.div
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={cl.header}>
          <h2>
            We Business and{" "}
            <span className={"greenContent"}>It Solutions Of Total</span>
            -Services
          </h2>
          <span className={cl.typography}>
            <p>
              With long-term cooperation, our company provides its partner with
              individual partner price for outstaffing and outsourcing services of our enterprises,
              which will pleasantly surprise you!
            </p>
          </span>
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
          className={cl.inp_blocks}>
          <input type="text" placeholder="Name*" />
          <input type="text" placeholder="Email*" />
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
          className={cl.inp_blocks}>
          <input type="text" placeholder="Phone*" />
          <input type="text" placeholder="Website" />
        </motion.div>
        <motion.textarea
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Comments/Message"
        ></motion.textarea>
        <motion.button
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >Submit Now</motion.button>
      </div>
      <div className={cl.contact}>
        <div className={cl.contact_now}>
          <motion.div
            viewport={{ once: true }}
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }} className={cl.contact_now_inner}>
            <div className={cl.contact_now_inner_left}>
              <Image src={icon} alt={"img"}/>
              <h3>Start Your Best it-Service for Business</h3>
            </div>
            <div className={cl.contact_now_inner_right}>
              <button>Contact Now</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Form;
