import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <main>
                <Banner />
                <About />
                <Skills />
                <Education />
            </main>
        </div>
    );
};

export default RootLayout;