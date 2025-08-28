import { Instagram, Twitter, Linkedin } from 'lucide-react'; // or use image icons

function Footer() {
  return (
    <footer className="bg-[#1c2e35] text-white pt-20 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-5">
          <h3 className="text-4xl font-bold text-[#59e4a8]">Blogo.</h3>
          <p className="text-gray-300 text-xl">
            Where ideas grow and stories unfold.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram">
              <Instagram className="text-gray-300 hover:text-[#59e4a8] w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="text-gray-300 hover:text-[#59e4a8] w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="text-gray-300 hover:text-[#59e4a8] w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-2xl mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#59e4a8] text-xl font-light transition">Home</a></li>
            <li><a href="#" className="hover:text-[#59e4a8] text-xl font-light transition">Articles</a></li>
            <li><a href="#" className="hover:text-[#59e4a8] text-xl font-light transition">Topics</a></li>
            <li><a href="#" className="hover:text-[#59e4a8] text-xl font-light transition">About</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-2xl mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-xl hover:text-[#59e4a8] transition">Privacy Policy</a></li>
            <li><a href="#" className="text-xl hover:text-[#59e4a8] transition">Terms</a></li>
            <li><a href="#" className="text-xl hover:text-[#59e4a8] transition">Cookies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-2xl mb-4">Stay Updated</h4>
          <p className="text-gray-300 mb-3 text-xl">
            Get the latest posts delivered to your inbox.
          </p>
          <div className="lg:flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-[#2d3e45] text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#59e4a8]"
            />
            <button className="mt-5 bg-[#59e4a8] text-[#1c2e35] px-4 py-2 rounded-md font-medium hover:bg-[#4ad295] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#2d3e45] mt-12 pt-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Blogo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;