import React from "react";

const Footer = () => {
    return (
        <div className="mb-20">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex justify-between mb-20">
                    <div className="flex-2 space-y-4">
                        <h3 className="font-inter-bold text-2xl">
                            <span className="text-primary">CJE</span>lectronics
                        </h3>

                        <div>
                            <p className="font-inter-regular">Address:</p>
                            <p className="text-md font-inter-light  text-gray-500">
                                170-Saint Rita St. Maricaban, Pasay City
                            </p>
                        </div>
                        <div>
                            <p className="font-inter-regular">Contact:</p>
                            <p className="text-md font-inter-light  text-gray-500">
                                09434115514
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex gap-20 ">
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href=""
                                        className="text-md font-inter-light"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-md font-inter-light"
                                    >
                                        Serices
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-md font-inter-light"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-md font-inter-light"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-md font-inter-light"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href=""
                                        className="text-md font-inter-light"
                                    >
                                        Testimonials
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-md font-inter-light"
                                    >
                                        Support Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-md font-inter-light"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-md font-inter-light"
                                    >
                                        Partners
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-md font-inter-light"
                                    >
                                        Sitemap
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p>© 2025 CJElectronics. All rights reserved.</p>
                    <div className="flex gap-9">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies Settings</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
