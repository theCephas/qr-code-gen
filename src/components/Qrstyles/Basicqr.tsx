import { Fragment, useState, useEffect } from "react";
import QRCode from "qrcode.react";
import Header from "../Header";
import Headroom from "react-headroom";



export default function QrCode() {
        const [url, setUrl] = useState("");

        const downloadQRCode = (evt: React.FormEvent) => {
                evt.preventDefault();
                // TODO

                setUrl("");
        };

        const [isDarkMode, setIsDarkMode] = useState(false);

        useEffect(() => {
                const currentTheme = localStorage.theme;
                if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        setIsDarkMode(true);
                } else {
                        setIsDarkMode(false);
                }
        }, []);


        return (

                <Fragment>

                        <Headroom>
                                <Header />
                        </Headroom>

                        <div className={`h-[100vh] font-bodyFont ${isDarkMode ? 'dark:bg-black' : 'light:bg'} bg-white/40`}>

                                <div className={` ${isDarkMode ? 'dark:bg-black' : 'light:bg'} bg-white/40 bg-white/40 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] `}>
                                        <QRCode
                                                // id="qrCodeId"
                                                className="rounded-xl mb-8"
                                                size={window.innerWidth < 640 ? 200 : 300}
                                                value={url}
                                                bgColor="white"
                                                fgColor="black"
                                                />
                                        {/* // level="H"
                                        // includeMargin
                                        // imageSettings={{ */}
                                        {/* //         src: icon,
                                        //         excavate: true,
                                        //         width: 300 * 0.1,
                                        //         height: 300 * 0.1, */}

                                        {/* // }} */}
                                        
                                        <form onSubmit={downloadQRCode} className="flex flex-col">
                                                <input
                                                        type="text"
                                                        value={url}
                                                        onChange={(e) => setUrl(e.target.value)}
                                                        placeholder="https://example.com"
                                                />

                                                <button type="submit">Download QR Code</button>
                                        </form>
                                </div>
                        </div>
                </Fragment>
        );
}