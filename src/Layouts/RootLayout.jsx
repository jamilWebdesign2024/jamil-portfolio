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

            <div className="flex flex-col min-h-screen">
                <main className='flex-grow'>
                <Banner />
                <About />
                <Skills />
                <Education />
                <Projects />
                <Contact />
            </main>
             <Footer />
            </div>

           
        </div>
    );
};

export default RootLayout;
