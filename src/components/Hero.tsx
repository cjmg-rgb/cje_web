import React from "react";

const Hero = () => {
    return (
        <div className=" ">
            <div className="flex items-center  max-w-[1280px] mx-auto">
                <div className="flex-1">
                    <div className="w-[85%]">
                        <h1 className="text-[3.25rem] font-inter-bold">
                            Your Trusted <br /> Partner for Printing Solutions
                        </h1>
                        <p className="text-xl font-inter-light">
                            At CJE, we specialize in top-notch printer sales and
                            services, ensuring your printing needs are met with
                            precision and care. Additionally, our expert team is
                            here to handle all your electronic repair needs,
                            providing reliable solutions you can count on.
                        </p>
                        <div>
                            <button className="">Get Started</button>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
                <img
                    src="https://placehold.co/640x640"
                    alt="Placeholder"
                    className="rounded-2xl flex-1"
                />
            </div>
        </div>
    );
};

export default Hero;
