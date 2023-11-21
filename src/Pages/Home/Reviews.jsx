
const Reviews = () => {
    return (


        <div>
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-center">
                    Read trusted reviews from our customers
                </h2>
            </div>
            <div className="relative mt-32">
                <svg
                    className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#7B67F6]"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 54"
                >
                    <path
                        fill="currentColor"
                        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                    />
                </svg>
                <div className="mt-10" data-aos="fade-up">

                    <div className="mx-auto max-w-screen-2xl px-4 py-12 mt-10 bg-[#7B67F6] text-white">
                        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                            <blockquote
                                className="flex h-full flex-col justify-between border-2 p-6 shadow-sm sm:p-8"
                            >
                                <div>
                                    <div className="mt-4">
                                        <p className="text-2xl font-bold sm:text-3xl">
                                            Stayin' Alive
                                        </p>

                                        <p className="mt-4 leading-relaxed ">
                                            No, Rose, they are not breathing. And they have no arms or legs …
                                            Where are they? You know what? If we come across somebody with no
                                            arms or legs, do we bother resuscitating them? I mean, what
                                            quality of life do we have there?
                                        </p>
                                    </div>
                                </div>

                                <footer className="mt-4 text-sm font-medium  sm:mt-6">
                                    &mdash; Michael Scott
                                </footer>
                            </blockquote>
                            <blockquote
                                className="flex h-full flex-col justify-between border-2 p-6 shadow-sm sm:p-8"
                            >
                                <div>
                                    <div className="mt-4">
                                        <p className="text-2xl font-bold  sm:text-3xl">
                                            Lia Desuja
                                        </p>

                                        <p className="mt-4 leading-relaxed ">
                                            No, Rose, they are not breathing. And they have no arms or legs …
                                            Where are they? You know what? If we come across somebody with no
                                            arms or legs, do we bother resuscitating them? I mean, what
                                            quality of life do we have there?
                                        </p>
                                    </div>
                                </div>

                                <footer className="mt-4 text-sm font-medium  sm:mt-6">
                                    &mdash; Michael Scott
                                </footer>
                            </blockquote>
                            <blockquote
                                className="flex h-full flex-col justify-between border-2 p-6 shadow-sm sm:p-8"
                            >
                                <div>
                                    <div className="mt-4">
                                        <p className="text-2xl font-bold  sm:text-3xl">
                                            Stayin' Jas
                                        </p>

                                        <p className="mt-4 leading-relaxed ">
                                            No, Rose, they are not breathing. And they have no arms or legs …
                                            Where are they? You know what? If we come across somebody with no
                                            arms or legs, do we bother resuscitating them? I mean, what
                                            quality of life do we have there?
                                        </p>
                                    </div>
                                </div>

                                <footer className="mt-4 text-sm font-medium  sm:mt-6">
                                    &mdash; Michael Scott
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Reviews;