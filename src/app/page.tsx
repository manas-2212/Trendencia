import Image from "next/image";
import Navbar from '../components/navbar/nav'
import Hero from '../components/hero-banner/Hero'
import Main from '../components/main-content/main'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Main/>
    </div>
  );
}
