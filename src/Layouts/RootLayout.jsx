import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';

const RootLayout = () => {
    return (
        <div>
           <Navbar></Navbar>

           <main>
                <Banner/>
                <About/>
                <Skills/>
           </main>
        </div>
    );
};

export default RootLayout;