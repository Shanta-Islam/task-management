import FeatureCard from "./FeatureCard";

const Features = () => {
    const featureList = [
        {
            id: 1,
            title: 'Assignment creation',
            img: 'https://i.ibb.co/sPB6H2h/images.png'
        },
        {
            id: 2,
            title: 'Asynchronous Learning',
            img: 'https://i.ibb.co/d6P45jq/images-1-1.png'
        },
        {
            id: 3,
            title: 'Critical Thinking Skills',
            img: 'https://i.ibb.co/C7g172h/images-1.png'
        }
    ]
    return (
        <div className="grid lg:grid-cols-3 gap-5 my-10">
            {
                featureList.map(feature => <FeatureCard key={feature.id} feature={feature}></FeatureCard>)
            }
        </div>
    );
};

export default Features;