import Header from '../../components/common/header';
import Footer from '../../components/common/footer';

const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <p className="text-gray-600 mb-4">
                            SRISAI is a leading software development company dedicated to transforming business visions into digital reality.
                        </p>
                        <p className="text-gray-600">
                            Founded on the principles of trust and excellence, we have delivered over 100+ projects to satisfied clients worldwide.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
