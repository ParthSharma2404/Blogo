import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
        const response = await axios.get('http://localhost:5000/api/blogs/all', config);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching all blogs:', error.message);
        alert('Error loading blogs: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBlogs();
  }, [token]);

  if (loading) {
    return <div className="text-center text-xl py-10">Loading blogs...</div>;
  }

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 py-10 text-lg">
      <h2 className="text-3xl font-bold mb-6 text-center border py-3 px-4 border-green-400 rounded-xl">All Blogs</h2>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">No blogs available yet...</p>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="p-4 sm:p-6 border rounded-xl shadow-sm bg-white dark:bg-[#2a3a43]"
            >
              <h3 className="text-2xl font-bold text-green-700 dark:text-white">{blog.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-200 whitespace-pre-wrap">{blog.content}</p>
              <p className="mt-2 text-gray-500 text-sm">By {blog.author?.username || 'Unknown Author'} on {new Date(blog.timestamp).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllBlogs;