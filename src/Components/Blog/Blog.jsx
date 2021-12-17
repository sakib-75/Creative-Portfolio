import React from 'react';
import '../Blog/Blog.css';
import BlogData from './Blog_data';
import BlogItem from './Blog_item';

export default function Blog() {
    return (
        <section className="blog-section" id="blog">
            <div className="container blog-body">
                <h2 className="section-title center">Latest Blog</h2>
                <p className="paragraph center">When unknow printer took a gallery of type and scramblted it to make a type specimen book</p>

                <div className="blog-item-body">
                    {
                        BlogData.map((blog, index) => <BlogItem key={index} blog_data={blog}/>)
                    }
                </div>

            </div>
        </section>
    );
}
