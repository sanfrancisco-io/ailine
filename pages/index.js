import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../src/components/Header/Header";
import MainSlider from "../src/components/MainSlider/MainSlider";
import Footer from "../src/components/Footer/Footer";
import About from "../src/components/About/About";
import PreFooter from "../src/components/PreFooter/PreFooter";
import Largest from "../src/components/LargestBlock/Largest";
import Form from "../src/components/Form/Form";
import Services from "../src/components/Services/Services";
import Team from "../src/components/Team/Team";
import Skill from "../src/components/Skill/Skill";
import Ompanies from "../src/components/Ompanies/Ompanies";
import WorkingProccess from "../src/components/WorkingProccess/WorkingProccess";

export default function Home() {
  return (
    <>
      <Header />
      <MainSlider />
      <About />
      <Services />
      <Team />
      <WorkingProccess />
      <Ompanies />
      <Skill />
      <Form />
      <Largest />
      <PreFooter />
      <Footer />
    </>
  );
}
