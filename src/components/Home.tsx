import { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import QrCodeEdit from 'mdi-react/QrcodeEditIcon';
import Email from 'mdi-react/EmailOutlineIcon';
import Github from 'mdi-react/GithubIcon';
import Twitter from 'mdi-react/TwitterIcon';
import Phone from 'mdi-react/PhoneIcon';
import LinkedIn from 'mdi-react/LinkedinIcon';
import LightDark from 'mdi-react/ThemeLightDarkIcon';
import CheckBox from 'mdi-react/CheckboxMarkedCircleOutlineIcon';
import StarPoint from 'mdi-react/StarFourPointsCircleOutlineIcon'


const Home = () => {
        const [isDarkMode, setIsDarkMode] = useState(false);

        useEffect(() => {
                const currentTheme = localStorage.theme;
                if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        setIsDarkMode(true);
                } else {
                        setIsDarkMode(false);
                }
        }, []);

        const handleThemeToggle = () => {
                if (isDarkMode) {
                        document.documentElement.classList.remove('dark');
                        localStorage.theme = 'light';
                } else {
                        document.documentElement.classList.add('dark');
                        localStorage.theme = 'dark';
                }
                setIsDarkMode(!isDarkMode);
        };

        useEffect(() => {

                Aos.init({});
        }, [])

        return (
                <Fragment>
                        <Helmet>
                                <title>Qr Code Generator - Home</title>
                        </Helmet>

                        <div className={`font-bodyFont duration-500 ${isDarkMode ? 'dark:bg-[#030d06]' : 'light:bg'} bg-[#f3f3f3] h-screen`}>
                                <header className={`font-semibold shadow-lg duration-500 ${isDarkMode ? 'dark:bg-[#030d06]' : 'light:bg'} bg-white/100 p-4 px-6 md:px-10 flex justify-between border-b border-b-white/30 top-0 fixed w-full`}>
                                        <p className="text-green-500 text-[13px]">
                                                <QrCodeEdit className="text-green-500 mr-2 inline" size={20} />
                                                qrCode.Gen
                                        </p>

                                        <p onClick={handleThemeToggle}>
                                                <LightDark className={`text-green-500 cursor-pointer duration-500 ${isDarkMode ? 'dark' : 'light'}`} size={26} />
                                        </p>
                                </header>

                                <main className="pt-20">
                                        <section className={`border-b border-b-white/30 pb-20`}>


                                                <p className={`text-black text-center duration-500 after:block after:w-[4rem] after:rounded-full after:h-[3px] after:my-[1.5rem] after:mx-auto after:bg-black content-none pt-10 px-6 sm:px-10 font-semibold text-[10px] md:text-[12px] ${isDarkMode ? 'dark:after:bg-white' : 'light:bg'} ${isDarkMode ? 'dark:text-white' : 'light:bg'}`}>Free online
                                                        <span className={`text-green-500`}> Qr Code </span>
                                                        Generator</p>
                                                <p className={`text-green-500 duration-400 font-bold text-[18px] leading-8 mx-6 sm:mx-auto md:text-[21px] md:w-[600px] m-auto text-center`}>Generate free, customized, and well-presentable
                                                        <br /> qr codes to
                                                        friends, families, and business associates.
                                                </p>
                                                <p className={`text-black/80 text-center duration-500 pt-6 leading-8 px-6 md:px-10 md:w-[700px] m-auto text-[11px] ${isDarkMode ? 'dark:text-white/50' : 'light:bg'}`}>
                                                        qrCode.Gen is created to generate beautiful and usable qr codes for friends, families, business individuals, clients, and customers.
                                                        It enables quick access to websites, folders, and many more .
                                                </p>
                                                <Link to="/" className={`bg-green-500 p-4 w-[200px] shadow-lg rounded-xl hover:bg-green-700 duration-700 mt-10 flex items-center justify-center m-auto`}>Get Started</Link>

                                        </section>

                                        <section className={`bg-gradient-to-b from-emerald-100 to-green-300 px-6 md:px-10 py-10 shadow-lg`}>
                                                <p className={`font-bold text-[1.2rem] w-[275px] sm:w-[400px] flex items-center m-auto text-black sm:text-[30px] text-center tracking-wider`}>
                                                        Fast.Downloadable.Standard
                                                </p>
                                                <div className="flex flex-col md:flex-row justify-between items-center mt-12 mx-6 sm:mx-10">
                                                        <div>

                                                                <p className="text-center text-[12px] pb-4 w-auto md:w-[400px] md:text-left">
                                                                        Seamlessly connect your customers to your digital world using custom-designed
                                                                        QR codes that leave a lasting impression. From websites to social media, menus to promotional offers, our cutting-edge QR code solutions make interactions effortless and memorable.

                                                                </p>
                                                                <Link to="/" className={`bg-green-500 p-4 w-[200px] shadow-lg rounded-xl hover:bg-green-700 duration-700 my-6 flex items-center justify-center m-auto md:mt-8 md:m-0 font-bold`}>Try it Now</Link>

                                                        </div>
                                                        <img src="./src/assets/qrcodeill.svg" className="w-[300px] sm:w-[400px] m-auto" alt="Qr Code illustration" />
                                                </div>
                                        </section>

                                        <section className={`${isDarkMode ? 'dark:bg-[#030d06]' : 'light:bg'} duration-700 pt-16 px-4 md:px-10 flex flex-wrap justify-center items-center`}>

                                                <div className={`border border-black/20 ${isDarkMode ? 'dark:border-white/30' : 'light:bg'} text-black hover:shadow-lg cursor-pointer hover:bg-gradient-to-b from-emerald-600 to-green-800 rounded-2xl duration-700 p-10 mb-10 h-[320px] w-[275px] sm:w-[300px]`}>
                                                        <h4 className={`${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black text-[16px] font-bold pb-4`}>For Businesses</h4>
                                                        <p className={`${isDarkMode ? 'dark:text-white/60' : 'light:bg'} text-black text-[11px] font-semibold text-black/40 pb-8`}>Transform your marketing strategies with eye-catching QR codes that engage and excite</p>
                                                        <p className={`pb-8 ${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black`}>
                                                                <CheckBox size={26} className={`inline mr-2 text-green-500`} />
                                                                Quick business transactions
                                                        </p>
                                                        <p className={`${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black`}>
                                                                <CheckBox size={26} className={`inline mr-2 text-green-500`} />
                                                                Enable easy payments
                                                        </p>
                                                        <p className={`pt-8 ${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black`}>
                                                                <CheckBox size={26} className={`inline mr-2 text-green-500`} />
                                                                Boosts Business Efficiency
                                                        </p>

                                                </div>
                                                <div className={`border border-black/20 ${isDarkMode ? 'dark:border-white/30' : 'light:bg'} text-black hover:shadow-lg cursor-pointer hover:bg-gradient-to-b from-emerald-600 to-green-800 rounded-2xl duration-700 p-10 mb-10 h-[320px] w-[275px] sm:w-[300px]  sm:mx-8`}>
                                                        <h4 className={`${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black text-[16px] font-bold pb-4`}>For Individuals</h4>
                                                        <p className={`${isDarkMode ? 'dark:text-white/60' : 'light:bg'} text-black text-[11px] font-semibold text-black/40 pb-8`}>Unlocking Convenience: Embrace the Power of QR Codes</p>
                                                        <p className={`pb-8 ${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black`}>
                                                                <CheckBox size={26} className={`inline mr-2 text-green-500`} />
                                                                Create Lasting Memories
                                                        </p>
                                                        <p className={`${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black`}>
                                                                <CheckBox size={26} className={`inline mr-2 text-green-500`} />
                                                                Instant Access to Information
                                                        </p>
                                                        <p className={`pt-8 ${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black`}>
                                                                <CheckBox size={26} className={`inline mr-2 text-green-500`} />
                                                                Contactless Transactions
                                                        </p>

                                                </div>
                                                <div className={`border border-black/20 ${isDarkMode ? 'dark:border-white/30' : 'light:bg'} text-black hover:shadow-lg cursor-pointer hover:bg-gradient-to-b from-emerald-600 to-green-800 rounded-2xl duration-700 p-10 mb-10 h-[320px] w-[275px] sm:w-[300px]`}>
                                                        <h4 className={`${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black text-[16px] font-bold pb-4`}>For Families</h4>
                                                        <p className={`${isDarkMode ? 'dark:text-white/60' : 'light:bg'} text-black text-[11px] font-semibold text-black/40 pb-8`}>Keep loved ones informed effortlessly</p>
                                                        <p className={`pb-8 ${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black`}>
                                                                <CheckBox size={26} className={`inline mr-2 text-green-500`} />
                                                                Event invitations
                                                        </p>
                                                        <p className={`${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black`}>
                                                                <CheckBox size={26} className={`inline mr-2 text-green-500`} />
                                                                Share useful resources
                                                        </p>
                                                        <p className={`pt-8 ${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black`}>
                                                                <CheckBox size={26} className={`inline mr-2 text-green-500`} />
                                                                Virtual gatherings
                                                        </p>

                                                </div>
                                        </section>

                                        <section className="bg-[#030d06] border-t border-t-white/30 p-20 py-[70px]">
                                                <div className="text-center">
                                                        <StarPoint className="m-auto text-green-600" size={100} />
                                                        <p className="text-white text-[15rem] sm:text-[2rem] font-bold w-[200px] m-auto">Say goodbye to typing long URLs.</p>
                                                </div>
                                        </section>
                                </main>

                                <footer className={`flex justify-between ${isDarkMode ? 'dark:bg-[#030a05]' : 'light:bg'} duration-700 text-[10px] p-6 px-6 md:px-10 border-t border-t-white`}>
                                        <div className="flex">
                                                <p className={`pr-2 ${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black`}> 
                                                        &copy;2023
                                                </p>
                                                <a href="https://github.com/theCephas" className="inline cursor-pointer text-green-500 ">
                                                        Osho Iseoluwa
                                                </a>
                                        </div>
                                        <div className={`${isDarkMode ? 'dark:text-white' : 'light:bg'} text-black flex mt-[-4px]`} >
                                                <a className=" hover:text-green-500 duration-700" href="https://www.linkedin.com/in/iseoluwa-osho">
                                                        <LinkedIn size={22} />
                                                </a>
                                                <a  className="px-4 hover:text-green-500 duration-700" href="mailto:oshoiseoluwa@gmail.com" >
                                                        <Email size={22} />
                                                </a>
                                                <a className=" hover:text-green-500 duration-700" href="tel:+2348110470908">
                                                        <Phone size={22} />
                                                </a>
                                                <a  className="px-4 hover:text-green-500 duration-700" href="https://github.com/theCephas">
                                                        <Github size={22} />
                                                </a>
                                                <a className=" hover:text-green-500 duration-700" href="https://twitter.com/OshoIseoluwa">
                                                        <Twitter size={22} />
                                                </a>
                                        </div>
                                </footer>
                        </div>
                </Fragment>
        );
};


export default Home;
