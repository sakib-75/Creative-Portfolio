import React from 'react'
import { Link_button } from '../Sub Components/btn_components'

export default function Pricing_item(props) {
    const { pricing: {image, type, price, timePeriod, packageDesc, link} } = props;

    return (
        <div className="pricing-item">
            {image}
            <h3>{type}</h3>
            <ul>
                {
                    packageDesc.map((desc, index) => <li key={index}>{desc}</li>)
                }
            </ul>
            <h2>{price} <span>{timePeriod}</span></h2>
            <Link_button button_title="start now" link={link}/>

        </div>
    );
}
