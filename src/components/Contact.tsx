import React from "react";

const Contact = () => {
    return (
        <div className="mb-20">
            <div className="max-w-[1280px] mx-auto">
                <div className="border-gray-100 border-2 p-12 flex justify-between items-center rounded-md">
                    <div>
                        <h2 className="text-[2rem] font-inter-bold">
                            Get in touch with CJElectronics
                        </h2>
                        <p className="text-xl font-inter-light">
                            Contact us for service quotes and inquires today!
                        </p>
                    </div>
                    <div>
                        <button className="bg-primary text-white px-4 py-2 cursor-pointer rounded-md font-inter-bold">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
