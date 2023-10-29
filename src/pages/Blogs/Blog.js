import React from "react"
import "./Blog.scss"
import "../../components/BlogBox/Data"
import BlogBox from "../../components/BlogBox/BlogBox"
import blogData from "../../components/BlogBox/Data"
import { CgSearch } from "react-icons/cg"
import { FiChevronRight } from "react-icons/fi"

function Blog() {
    return (
        <>
            <section className="blog-section">
                <div className="body">
                    <h1>Blogs</h1>
                    <BlogBox />
                </div>
                <div className="side-bar">
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                        <div className="search-icon">
                            <CgSearch className="magnifying-glass" />
                        </div>
                    </div>
                    <div className="popular-tags">
                        <h2>Popular Tags</h2>
                        <div className="tags">
                            <p>#Burger</p>
                            <p>#Cooking</p>
                            <p>#Pizza</p>
                            <p>#Drinks</p>
                            <p>#Coffee</p>
                            <p>#Pastry</p>
                            <p>#Salad</p>
                            <p>#Delivery</p>
                            <p>#Favorites</p>
                            <p>#Promo</p>
                        </div>
                    </div>
                    <div className="categories">
                        <h2>Categories</h2>
                        <ul>
                            <li>
                                <p>
                                    <FiChevronRight />
                                    Burger
                                </p>
                                <span>(4)</span>
                            </li>

                            <li>
                                <p>
                                    <FiChevronRight />
                                    Pasta
                                </p>
                                <span>(4)</span>
                            </li>

                            <li>
                                <p>
                                    <FiChevronRight />
                                    Pastry
                                </p>
                                <span>(4)</span>
                            </li>

                            <li>
                                <p>
                                    <FiChevronRight />
                                    Pizza
                                </p>
                                <span>(4)</span>
                            </li>

                            <li>
                                <p>
                                    <FiChevronRight />
                                    Salad
                                </p>
                                <span>(4)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="recent-posts">
                        <h2>Recent Posts</h2>
                        {blogData.map((post) => (
                            <div className="post">
                                <img
                                    src={require("../../images/blogs/" +
                                        post.id +
                                        ".jpg")}
                                    alt="post"
                                />
                                <div className="details">
                                    <p>{post.date}</p>
                                    <h3>{post.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
