
import Nature from '../photos/Nature.png'
import chatBot from '../photos/chatBot.png';
import Digital from '../photos/Digital.png';
import { Link } from 'react-router-dom';

function Featuredblogs() {
  const posts = [
    {
      id: 1,
      title: "How Nature Boosts Creativity",
      excerpt: "Discover the science behind why walks in nature spark innovative thinking.",
      category: "Personal Growth",
      readTime: "4 min read",
      image: Nature
    },
    {
      id: 2,
      title: "The Future of AI Writing Tools",
      excerpt: "Exploring how AI is reshaping content creation without losing the human touch.",
      category: "Technology",
      readTime: "6 min read",
      image: chatBot
    },
    {
      id: 3,
      title: "Minimalism for Digital Clarity",
      excerpt: "Declutter your digital life to focus on what truly matters to you.",
      category: "Lifestyle",
      readTime: "3 min read",
      image: Digital
    }
  ];

  return (
    <div className="py-[100px] px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Featured Blogs</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-6 max-w-[350px] w-full outline outline-[2px] rounded-xl shadow-md hover:outline-[rgb(89_208_168)] transition duration-200 dark:bg-[#4c7a58]"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{post.title}</h3>
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover rounded-md mb-4" />
            <article className="text-base md:text-lg font-light mb-5">{post.excerpt}</article>
            <div className="flex justify-between items-center">
              <span className="bg-[rgb(89_208_168)] text-white px-3 py-1 rounded-xl text-sm md:text-base">
                {post.category}
              </span>
              <span className="text-sm md:text-base">{post.readTime}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-center mt-16">
        <button className="font-bold text-xl md:text-2xl outline outline-2 px-5 py-2 rounded-xl outline-[rgb(89_228_168)] hover:bg-[rgb(89_228_168)] hover:text-white transition duration-300">
          <Link to="/all-blogs">
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Featuredblogs;
