import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../Components/Banner';

const RootLayout = () => {
    return (
        <div>
           <Navbar></Navbar>

           <main>
                <Banner/>
           </main>
        </div>
    );
};

export default RootLayout;