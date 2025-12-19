import Breadcrumb from "../components/Breadcrumb";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Offering from "../components/Offerings";
import Footer from "../components/Footer";
import Philosophy from "../components/Philosophy";

function Home(){
    return(
        <>
            <Navbar/>
            {/* <Breadcrumb
                items={["Home", "Solutions", "IT Security", "Zero Trust"]}
            /> */}
            <Hero/>
            <Offering/>
            <Philosophy/>
            <Footer/>
        </>
    )
}

export default Home; 