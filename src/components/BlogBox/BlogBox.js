import React from "react"
import blogData from "./Data"
import "./BlogBox.scss"
import { BsFillPersonLinesFill } from "react-icons/bs"

function BlogBox() {
    return (
        <>
            {blogData.map((blog) => (
                <div className="blog-box" key={blog.id}>
                    <img
                        src={require("../../images/blogs/" + blog.id + ".jpg")}
                        alt="blog"
                    />
                    <div className="author">
                        <BsFillPersonLinesFill className="icon" />
                        <p>
                            By <span>{blog.author}</span> | {blog.date}
                        </p>
                    </div>
                    <h2>{blog.title}</h2>
                    <p className="description">{blog.description}</p>
                    <button>Read More</button>
                </div>
            ))}
        </>
    )
}

export default BlogBox
