import React from 'react'
import { AiOutlineCaretRight } from "react-icons/ai"

export default function Blog_item(props) {
    const {blog_data : {image, date, title, description}} = props;

    return (
        <div className="blog-item">
            {image}
            <div className="blog-text-part">
                <span>{date}</span>
                <a className="blog-title" href="#">{title}</a>
                <p>{description}</p>
                <div className="readmore-icon left-align">
                    <AiOutlineCaretRight/>
                    <a href="#"> Read More</a>
                </div>
            </div>
            
        </div>
    );
}
