import Image from "next/image";
import Navbar from './comp/navbar/nav'
import Hero from './comp/hero-banner/Hero'
import Main from './comp/main-content/main'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Main/>
    </div>
  );
}
