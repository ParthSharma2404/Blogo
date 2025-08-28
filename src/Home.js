import Greeting from './home/Greeting.js';
import Message from './home/Message.js';
import Getstarted from './home/Getstarted.js';
import Topic from './home/Topic.js';
import Featuredblogs from './home/Featuredblogs.js';
import { Link } from 'react-router-dom';

function Home() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <div>
      {/* Hero Section */}
      <div className="mb-20 md:h-screen md:mb-0 flex flex-col justify-center">
        <div className="mt-20 flex flex-col items-center md:flex-row md:justify-around md:items-center px-4">
          <Greeting />
          <Message />
        </div>
        <div className="text-center mt-10">
          {isAuthenticated ? (
            <div>
              <Link to="/dashboard">
                <button className="bg-[#59e4a8] text-[#1c2e35] px-6 py-3 rounded-md font-medium hover:bg-[#4ad295] transition">
                  Dashboard
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <Getstarted />
            </Link>
          )}
        </div>
      </div>

      {/* Topics and Featured Blogs */}
      <Topic />
      <Featuredblogs />
    </div>
  );
}

export default Home;