import React from "react";

const Feature = () => {
    return (
        <div className="mb-20">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-4 grid-rows-2 gap-2 items-center justify-center">
                    <img
                        src="/images/laptop.jpg"
                        alt="Placeholder"
                        className="rounded-md w-full h-full object-cover"
                    />
                    <div className="col-span-2 justify-center items-center text-center">
                        <h2 className="text-[2rem] font-inter-bold text-center">
                            SERVICES
                        </h2>
                        <p className="text-xl font-inter-light text-gray-500">
                            check our services
                        </p>
                    </div>
                    <img
                        src="/images/printer.jpg"
                        alt="Placeholder"
                        className="rounded-md w-full h-full object-cover"
                    />
                    <img
                        src="/images/mobile.jpg"
                        alt="Placeholder"
                        className="rounded-md w-full h-full object-cover"
                    />
                    <img
                        src="https://placehold.co/600x200?text=Placeholder"
                        alt="Placeholder"
                        className="rounded-md w-full h-full object-cover col-span-2"
                    />
                    <img
                        src="/images/tv.jpg"
                        alt="Placeholder"
                        className="rounded-md w-full h-[215px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Feature;
