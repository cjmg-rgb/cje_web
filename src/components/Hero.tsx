import React from "react";

const Hero = () => {
    return (
        <div>
            <div className="flex items-center  max-w-[1280px] mx-auto">
                <div className="flex-1">
                    <div className="w-[85%]">
                        <h1 className="text-[3.25rem]/14 font-inter-bold mb-6">
                            Your <span className="text-primary">Trusted</span>{" "}
                            <br /> Partner for Printing Solutions!
                        </h1>
                        <p className="text-xl font-inter-light mb-16 text-gray-500">
                            At CJE, we specialize in top-notch printer sales and
                            services, ensuring your printing needs are met with
                            precision and care. Additionally, our expert team is
                            here to handle all your electronic repair needs,
                            providing reliable solutions you can count on.
                        </p>
                        <div className="flex gap-6">
                            <button className="text-primary font-inter-regular cursor-pointer">
                                Sign In
                            </button>
                            <button className="bg-primary text-white px-4 py-2 cursor-pointer rounded-md font-inter-regular">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img
                        src="/images/hero.jpg"
                        alt="Placeholder"
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
