import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MiddleSection from "../components/MiddleSection";
import CreateEvent from "../components/CreateEvent";
import Brands from "../components/Brands";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-Poppins">
      <Navbar transparent />
      <Hero />
      <MiddleSection />
      <CreateEvent />
      <Brands />
      <Blog />
      <Footer />
    </div>
  );
}
