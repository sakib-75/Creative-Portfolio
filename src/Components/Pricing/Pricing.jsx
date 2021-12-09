import React from 'react'
import '../Pricing/Pricing.css'
import PricingItem from '../Pricing/Pricing_item'
import packageImg from '../Images/package.png'

export default function Pricing() {

    const PricingData = [
        {
            image : <img src={packageImg} alt="" />,
            type : "Basic",
            price : "$75",
            timePeriod : "Month",
            packageDesc : [
                "Graphic Design",
                "Web Design",
                "UI/UX",
                "HTML/CSS",
                "SEO Marketing",
                "Business Analysis"
            ]
        },
        {
            image : <img src={packageImg} alt="" />,
            type : "Standard",
            price : "$95",
            timePeriod : "Month",
            packageDesc : [
                "Graphic Design",
                "Web Design",
                "UI/UX",
                "HTML/CSS",
                "SEO Marketing",
                "Business Analysis"
            ]
        },
        {
            image : <img src={packageImg} alt="" />,
            type : "Premium",
            price : "$199",
            timePeriod : "Month",
            packageDesc : [
                "Graphic Design",
                "Web Design",
                "UI/UX",
                "HTML/CSS",
                "SEO Marketing",
                "Business Analysis"
            ]
        }
    ];

    return (
        <section className="container pricing-section">
            <h2 className="section-title center">Afforable Pricing</h2>
            <p className="paragraph center">When unknow printer took a gallery of type and 
                scramblted it to make a type specimen book
            </p>

            <div className="pricing-body">
                {
                    PricingData.map((element, index) => <PricingItem key={index} pricing={element}/>)
                }
            </div>
            
        </section>
    );
}
