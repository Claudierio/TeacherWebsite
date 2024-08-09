import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import StatusBar from './components/statusBar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <StatusBar /> 
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
