import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div className="card card-container mb-5">
      <img
        style={{ height: "300px" }}
        className="card-img-top"
        src={blog.thumbnail}
        alt="Card cap"
      />
      <div className="card-body">
        <h4
          style={{ fontWeight: "700", color: "#f0f0f0" }}
          className="card-title"
        >
          {blog.title}
        </h4>
        {blog.link ? (
          <a
            class="btn btn-info btn-block"
            href={blog.link}
            target="_blank"
            role="button"
          >
            <strong> Read More </strong>
          </a>
        ) : (
          <Link
            class="btn btn-info btn-block"
            href="https://www.google.com/"
            target="_blank"
            role="button"
          >
            <strong> Read More </strong>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Blog;
