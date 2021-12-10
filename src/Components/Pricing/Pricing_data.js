import packageImg from '../Images/package.png'

export const PricingData = [
    {
        image : <img src={packageImg} alt="" />,
        type : "Basic",
        price : "$5",
        timePeriod : "Day",
        packageDesc : [
            "Graphic Design",
            "Web Design",
            "UI/UX",
            "HTML/CSS",
            "SEO Marketing",
            "Business Analysis"
        ],
        link : "#"
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
        ],
        link : "#"
    },
    {
        image : <img src={packageImg} alt="" />,
        type : "Premium",
        price : "$299",
        timePeriod : "Year",
        packageDesc : [
            "Graphic Design",
            "Web Design",
            "UI/UX",
            "HTML/CSS",
            "SEO Marketing",
            "Business Analysis"
        ],
        link : "#"
    }
];