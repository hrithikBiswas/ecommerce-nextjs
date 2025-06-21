import Header from "@/app/components/Layout/Header";

import Footer from "@/app/components/Layout/Footer";
import { fetchProducts } from "@/app/api/api";
import Hero from "@/app/components/Home/Hero";
import Popular from "@/app/components/Home/Popular";
import Feature from "@/app/components/Home/Feature";
import Offer from "./components/Home/Offer";
import Top from "./components/Home/Top";
import Review from "./components/Home/Review";
import Discover from "./components/Home/Discover";
import Accessibility from "./components/Home/Accessibility";
import Newsteller from "./components/Home/Newsteller";

export default async function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Popular />
                <Feature />
                <Offer />
                <Top />
                <Review />
                <Discover />
                <Accessibility />
                <Newsteller />
            </main>
            <Footer />
        </>
    );
}
