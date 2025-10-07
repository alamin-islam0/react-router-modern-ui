import React, { use } from "react";
import "./Blogs.css";
import { Link } from "react-router";

const Blog = ({ blogsPromise }) => {
  const blogs = use(blogsPromise);

  return (
    <div className="min-h-screen bg-base-200 py-6 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Blog Archive
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-base-content/70 max-w-2xl mx-auto px-2">
            Discover our latest articles, insights, and stories from our
            community
          </p>
          <div className="stats shadow mt-8">
            <div className="stat">
              <div className="stat-title">Total Posts</div>
              <div className="stat-value text-primary">{blogs.length}</div>
              <div className="stat-desc">Articles published</div>
            </div>
            <div className="stat">
              <div className="stat-title">Categories</div>
              <div className="stat-value text-secondary">5+</div>
              <div className="stat-desc">Different topics</div>
            </div>
            <div className="stat">
              <div className="stat-title">Authors</div>
              <div className="stat-value text-accent">10+</div>
              <div className="stat-desc">Contributing writers</div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="card-body">
                {/* Post Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="badge badge-primary badge-sm">
                    Post #{blog.id}
                  </span>
                  <span className="text-xs text-base-content/60">
                    User {blog.userId}
                  </span>
                </div>

                {/* Post Title */}
                <h2 className="card-title text-lg line-clamp-2 mb-3">
                  {blog.title}
                </h2>

                {/* Post Excerpt */}
                <p className="text-base-content/70 text-sm line-clamp-3 mb-4">
                  {blog.body.length > 150
                    ? `${blog.body.substring(0, 150)}...`
                    : blog.body}
                </p>

                {/* Post Footer */}
                <div className="card-actions justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full w-8">
                        <span className="text-xs">{blog.userId}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold">
                        Author {blog.userId}
                      </div>
                      <div className="text-xs text-base-content/60">
                        2 min read
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/blogs/${blog.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="card bg-primary text-primary-content mt-12">
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-2xl mb-4">
              Stay Updated!
            </h2>
            <p className="mb-6">
              Get the latest posts delivered right to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered flex-1"
              />
              <button className="btn btn-secondary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
