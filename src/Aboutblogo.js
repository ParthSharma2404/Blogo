
import Blogo from "./photos/Blogo..png";
import Girl from "./photos/girl.png";
import Goal from "./photos/goal.png";
import Why from "./photos/why.png";
import Join from "./photos/join.png";

function Aboutblogo() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Logo and Tagline */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold pt-32 sm:pt-40 text-center text-[#59e4a8]">
        Blogo<span className="text-[#1c2e35] dark:text-[#59e4a8]">.</span>
      </h1>

      <div className="flex justify-center pt-6 sm:pt-10 pb-24">
        <p className="text-center text-xl sm:text-2xl italic text-gray-400 max-w-xl leading-snug">
          Where ideas grow and stories unfold.
        </p>
      </div>

      {/* Blogo Description */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 pb-20">
        <div className="text-xl sm:text-2xl p-4 font-light italic max-w-xl">
          <span className="font-bold">Blogo is more than just a blog —</span>{" "}
          it's a digital canvas where ideas, stories, and insights come alive.
          Launched in 2025, Blogo was born from a simple belief: that thoughtful
          words can spark curiosity, inspire change, and bring people together.
        </div>
        <img src={Girl} alt="girl" className="w-full max-w-md sm:max-w-lg" />
      </div>

      {/* Our Mission */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-16">
        <img src={Goal} alt="goal" className="w-full max-w-sm sm:max-w-md lg:max-w-lg" />
        <div className="text-xl sm:text-2xl p-4 font-light italic max-w-xl">
          <h2 className="font-extrabold text-2xl sm:text-3xl pb-4">Our Mission</h2>
          <p className="font-bold pb-2">
            At Blogo, we aim to create a space where:
          </p>
          <ul className="space-y-2">
            <li>
              💡 <span className="font-medium">Ideas meet clarity —</span> tackling complex topics with simplicity
            </li>
            <li>
              📚 <span className="font-medium">Stories find their audience —</span> authentic voices, powerful narratives
            </li>
            <li>
              🌍 <span className="font-medium">Curiosity fuels discovery —</span> every post is a step toward learning more
            </li>
          </ul>
          <p className="pt-4">
            Whether you're diving into deep tech explorations, reading reflective essays, or picking up life hacks — Blogo is your companion in the journey of knowledge and creativity.
          </p>
        </div>
      </div>

      {/* Why Blogo */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 pb-24">
        <div className="text-xl sm:text-2xl p-4 font-light italic max-w-xl">
          <h2 className="font-extrabold text-2xl sm:text-3xl pb-4">Why Blogo?</h2>
          <ul className="space-y-2">
            <li>
              ✅ <span className="font-medium">Diverse Content –</span> From productivity and tech to personal development and creativity
            </li>
            <li>
              ✅ <span className="font-medium">Minimalist Design –</span> Clean, focused, and distraction-free reading experience
            </li>
            <li>
              ✅ <span className="font-medium">Community-Driven –</span> Built around people, not just posts
            </li>
          </ul>
        </div>
        <img src={Why} alt="why" className="w-full max-w-sm sm:max-w-md lg:max-w-lg" />
      </div>

      {/* Join Us */}
      <div className="text-center pb-24">
        <h2 className="text-4xl sm:text-5xl font-bold pb-6">Join Us</h2>
        <div className="flex justify-center">
          <img src={Join} alt="join" className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-6" />
        </div>
        <p className="text-xl sm:text-2xl font-light italic max-w-3xl mx-auto px-4">
          We’re on a mission to make the internet more thoughtful — one blog post at a time. Let’s learn. Let’s grow. Let’s blog.
        </p>
      </div>
    </div>
  );
}

export default Aboutblogo;
