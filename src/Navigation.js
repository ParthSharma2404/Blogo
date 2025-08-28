import moon from './photos/moon.png';
import brightness from './photos/brightness.png';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
  const [isDark, setDark] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('token');

  useEffect(() => {
    const html = document.documentElement;
    isDark ? html.classList.add('dark') : html.classList.remove('dark');
  }, [isDark]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <header className="p-4 pt-8 md:px-10 xl:px-40 relative">
      <div className="flex justify-between items-center">
        <div className="text-4xl font-extrabold text-[#59e4a8]"><Link to='/'>Blogo.</Link></div>

        {/* Hamburger Icon */}
        {!isMenuOpen && (
          <div className="md:hidden z-50">
            <button onClick={() => setMenuOpen(true)}>
              <svg className="w-8 h-8 text-[#1c2e35] dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        )}

        {/* Mobile + Desktop Navigation */}
        <nav
          className={`md:flex md:gap-6 md:static md:bg-transparent ${
            isMenuOpen
              ? 'fixed inset-0 bg-white dark:bg-[#1c2e35] z-40 flex flex-col items-center justify-center gap-10'
              : 'hidden md:flex'
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-2xl font-bold text-[#1c2e35] dark:text-white">HOME</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="text-2xl font-bold text-[#1c2e35] dark:text-white">ABOUT</Link>
            </li>
            <li>
              <Link to="/all-blogs" onClick={() => setMenuOpen(false)} className="text-2xl font-bold text-[#1c2e35] dark:text-white">All Blogs</Link>
            </li>
            <li>
              <button onClick={() => setDark(prev => !prev)}>
                <img src={isDark ? brightness : moon} className="w-7" alt="theme toggle" />
              </button>
            </li>
            <li>
              {isAuthenticated ? (
                location.pathname === '/dashboard' ? (
                  <button
                    onClick={handleLogout}
                    className="text-2xl font-bold border-2 border-[#59e4a8] rounded-xl px-5 py-2 text-[#1c2e35] dark:text-white hover:bg-[#59e4a8] hover:text-white"
                  >
                    LogOut
                  </button>
                ) : (
                  <Link
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-bold border-2 border-[#59e4a8] rounded-xl px-5 py-2 text-[#1c2e35] dark:text-white hover:bg-[#59e4a8] hover:text-white"
                  >
                    Dashboard
                  </Link>
                )
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold border-2 border-[#59e4a8] rounded-xl px-5 py-2 text-[#1c2e35] dark:text-white hover:bg-[#59e4a8] hover:text-white"
                >
                  LogIn
                </Link>
              )}
            </li>
          </ul>
        </nav>

        {/* Close Button for Mobile Menu */}
        {isMenuOpen && (
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 z-50 text-[#1c2e35] dark:text-white"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}

export default Navigation;