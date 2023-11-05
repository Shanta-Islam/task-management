
const FeatureCard = ({feature}) => {
    return (
        <div className="card w-3/4 xl:w-96 bg-base-100 shadow-xl border p-10 mx-auto">
             <figure className="mx-auto"><img src={feature.img} alt="icon" width={50} height={50} /></figure>
            <div className="card-body">
                <h2 className="text-xl font-bold text-center">
                    {feature.title}
                </h2>
            </div>
        </div>
    );
};

export default FeatureCard;