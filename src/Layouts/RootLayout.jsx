import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Projects from '../Components/Projects';
import Quotes from '../Components/Testiomonials';
import Experienced from '../Components/Experience';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <main>
                <Banner />
                <About />
                <Experienced/>
                <Skills />
                <Education />
                <Projects/>
                <Quotes/>
            </main>
        </div>
    );
};

export default RootLayout;