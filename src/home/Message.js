function Message() {
    return (
        <div className="text-center md:text-left">
            <h1 className="font-extrabold text-4xl dark:text-[#59e4a8] md:text-5xl text-[#1c2e35] mb-6">
                Welcome!
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-[#1c2e35] dark:text-white">
                Blogo is where thoughts, stories, and inspiration come together.
                <br className="hidden md:block" />
                Let’s <span className="text-[#59e4a8] font-bold">explore!</span>
            </p>
        </div>
    );
}

export default Message;
