import React from 'react'
import { Read_more } from '../Sub Components/btn_components'

export default function Blog_item(props) {
    const {blog_data : {image, date, title, description, link}} = props;

    return (
        <div className="blog-item">
            {image}
            <div className="blog-text-part">
                <span>{date}</span>
                <a className="blog-title" href="#">{title}</a>
                <p>{description}</p>
                
                <div className="left-align">
                    <Read_more link={link}/>
                </div>
            </div>
            
        </div>
    );
}
