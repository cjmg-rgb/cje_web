const Feature = () => {
    const features = [
        {
            name: "printer",
            src: "/images/printer.jpg",
        },
        {
            name: "text",
            src: "",
        },
        {
            name: "laptop",
            src: "/images/laptop.jpg",
        },
        {
            name: "mobile",
            src: "/images/mobile.jpg",
        },
        {
            name: "amplifier",
            src: "/images/amplifier.jpg",
        },
        {
            name: "tv",
            src: "/images/tv.jpg",
        },
    ];

    return (
        <div className="mb-20">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-4 grid-rows-2 gap-2 items-center justify-center">
                    {features.map((feature) => {
                        if (feature.name == "text") {
                            return (
                                <div className="col-span-2 justify-center items-center text-center">
                                    <h2 className="text-[2rem] font-inter-bold text-center">
                                        SERVI
                                        <span className="text-primary">
                                            CES
                                        </span>
                                    </h2>
                                    <p className="text-xl font-inter-light text-gray-500">
                                        CHECK OUT OUR SERVICES
                                    </p>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className={`${
                                        feature.name == "amplifier"
                                            ? "col-span-2"
                                            : ""
                                    } bg-black rounded-md`}
                                >
                                    <div className="relative group">
                                        <img
                                            key={feature.name}
                                            src={feature.src}
                                            alt="Placeholder"
                                            className={`rounded-md w-full h-[215px] object-cover ${
                                                feature.name != "amplifier"
                                                    ? "hover:opacity-50 hover:cursor-pointer hover:ease-in-out hover:transition-all"
                                                    : ""
                                            } `}
                                        />
                                        {feature.name != "amplifier" && (
                                            <h2 className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[2rem] font-inter-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {feature.name.toUpperCase()}
                                            </h2>
                                        )}
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Feature;
