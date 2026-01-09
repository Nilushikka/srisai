
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import HeroSection from './herosection';
import ClientSection from './clientsection';
import Services from './services';
import Testimonials from './testimonials';
import BlogSection from './blogsection';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <ClientSection />
                <Services />
                <Testimonials />
                <BlogSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
