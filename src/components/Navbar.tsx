const Navbar = () => {
    const links = [
        {
            name: "ABOUT",
            to: "#",
        },
        {
            name: "FEATURE",
            to: "#",
        },
        {
            name: "TESTIMONIAL",
            to: "#",
        },
        {
            name: "CONTACT",
            to: "#",
        },
    ];

    let test = "hello";
    console.log(test.slice(0, -3));

    return (
        <div className="h-36">
            <div className="flex flex-row justify-between items-center max-w-[1280px] mx-auto h-full">
                <h3 className="font-inter-bold text-2xl">
                    <span className="text-primary">CJE</span>lectronics
                </h3>
                <nav>
                    <ul className="flex flex-row gap-12">
                        {links.map((link) => (
                            <li>
                                <a
                                    href={`${link.to}`}
                                    className="font-inter-bold"
                                >
                                    {link.name.slice(0, -3)}
                                    <span className="text-primary">
                                        {link.name.slice(-3)}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
