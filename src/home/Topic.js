import topic from '../photos/topic.jpg';

function Topic() {
    const topics = ["Personal Growth", "Technology", "Writing", "Lifestyle", "Career", "Media & Fun"];

    return (
        <div className="flex flex-col md:flex-row items-center justify-around px-10 py-[200px] bg-[#e7f7f3] rounded-2xl mx-2">
            {/* Left Side: Text + Topics */}
            <div className=" md:text-left max-w-xl space-y-10">
                <h2 className="text-4xl md:text-4xl font-bold text-[#1c2e35] leading-snug lg:text-5xl">
                    Whether you're here to learn, reflect, or get inspired — there's something for everyone.
                </h2>

                <ul className="text-xl grid grid-cols-2 md:grid-cols-3 gap-6 text-2xl font-semibold">
                    {topics.map((element, index) => (
                        <li
                            key={index}
                            className="bg-[rgb(89_228_168)] text-white px-6 py-4 rounded-3xl shadow-md content-center
                                       hover:bg-white hover:text-black hover:outline hover:outline-green-200 
                                       hover:outline-[2px] transition duration-300 cursor-pointer"
                        >
                            {element}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Side: Image */}
            <div className="mt-10 md:mt-0 md:ml-12">
                <img src={topic} alt="Topic Illustration" className="w-[400px] md:w-[550px] rounded-xl shadow-md" />
            </div>
        </div>
    );
}

export default Topic;
