import React from 'react'
import Button from '../Sub Components/Button'

export default function Pricing_item(props) {
    const { pricing: {image, type, price, timePeriod, packageDesc} } = props;

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

            <Button button_title="Start Now"/>

        </div>
    );
}
