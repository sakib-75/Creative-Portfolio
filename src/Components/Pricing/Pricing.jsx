import React from 'react'
import '../Pricing/Pricing.css'
import PricingItem from '../Pricing/Pricing_item'
import { PricingData } from './Pricing_data';

export default function Pricing() {

    return (
        <section className="container pricing-section" id="pricing">
            <h2 className="section-title center">Afforable Pricing</h2>
            <p className="paragraph center">When unknow printer took a gallery of type and 
                scramblted it to make a type specimen book
            </p>

            <div className="pricing-body">
                {
                    PricingData.map((item, index) => <PricingItem key={index} pricing={item}/>)
                }
            </div>
            
        </section>
    );
}
