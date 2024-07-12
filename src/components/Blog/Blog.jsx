import React from 'react';
import './Blog.css';
import BlogImage from '../../assets/blog/blog.jpg';

export default function Blog() {
  return (
    <>
    <section id="blog">
        <div className="container">
            <div className="blog_wrapper">
                <div className="blog_col">
                    <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
                    <p>We offer tailored solutions and strategic guidance to help your business thrive in a competitive market. Whether you're starting out or looking to expand, our dedicated services are designed to foster growth and drive success.</p>
                    <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                    </div>
                </div>
                <div className="blog_col">
                    <div className="blog_image">
                        <img src={BlogImage} alt="Blog" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
