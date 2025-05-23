const About = () => {
    return (
        <div className="mb-20">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex my-20 items-center">
                    <div className="flex-1">
                        <h2 className="text-[2rem] font-inter-bold w-[85%]">
                            <span className="text-primary">CJE</span>lectronics:
                            Your Trusted Partner for Quality Printing and Repair
                            Services
                        </h2>
                    </div>
                    <div className="flex-1 text-xl font-inter-light">
                        <p className="text-xl font-inter-light text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique. Duis cursus, mi quis viverra ornare, eros
                            dolor interdum nulla, ut commodo diam libero vitae
                            erat. Suspendisse varius enim in eros elementum
                            tristique. Duis cursus, mi quis viverra ornare, eros
                            dolor interdum nulla.
                        </p>
                    </div>
                </div>
                <img
                    src="/images/hero1.jpg"
                    alt="Placeholder"
                    className="rounded-2xl flex-1 w-full h-[566px] object-cover"
                />
            </div>
        </div>
    );
};

export default About;
