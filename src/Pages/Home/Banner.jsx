import { motion } from "framer-motion";
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-right-top bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/qWrLHNn/pexels-andrea-piacquadio-3884186.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="hero-content text-center text-neutral-content">
                <motion.div 
                               
                               animate={{ rotate: 360 }}
  transition={{ type: 'spring', restDelta: 0.5 }}
                               >
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">Study with students from all over the world </h1>
                        <p className="mb-5">Join the largest global student community online and say goodbye to lack of motivation</p>
                    </div>
                </motion.div>

            </div>


        </div>
    );
};

export default Banner;