import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <main>
                <Banner />
                <About />
                <Skills />
                <Education />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default RootLayout;