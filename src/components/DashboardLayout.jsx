import Navbar from './Navbar';
import Footer from './DesktopFooter';
import MobileFooter from './MobileFooter';
import useWindowSize from '../hooks/useWindowSize';

export default function DashboardLayout({ children }) {
    const { width } = useWindowSize()

    return (
        <>
            <div className="w-full h-screen overflow-y-auto px-4 sm:px-10 md:px-24 pt-6 pb-28">
                <Navbar />
                <div className="mt-7">
                    {children}
                </div>
            </div>
            {
                width < 620 ? <MobileFooter /> : <Footer />
            }

        </>

    )
}



