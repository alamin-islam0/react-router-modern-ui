import React from "react";
import { useLoaderData, Link } from "react-router";

const SinglePost = () => {
  const blog = useLoaderData();
  console.log(blog);

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link to="/blogs" className="btn btn-outline btn-primary">
              ← Back to Blogs
            </Link>
          </div>

          {/* Post Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <span className="badge badge-primary badge-lg">
                  Post #{blog.id}
                </span>
                <span className="text-sm text-base-content/70">
                  User ID: {blog.userId}
                </span>
              </div>

              <h1 className="card-title text-3xl font-bold mb-4">
                {blog.title}
              </h1>

              <div className="divider"></div>

              <p className="text-lg leading-relaxed whitespace-pre-wrap">
                {blog.body}
              </p>

              <div className="card-actions justify-end mt-6">
                <Link to="/blogs" className="btn btn-primary">
                  View All Posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
