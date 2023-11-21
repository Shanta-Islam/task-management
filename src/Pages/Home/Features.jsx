

const Features = () => {
    return (
        <div className="my-24 flex gap-12 flex-col xl:flex-row">
            <div className="grid gap-4  md:grid-cols-2 xl:grid-cols-2 flex-1">
                <div className="card w-3/4 xl:w-72 bg-[#7B67F6] text-white shadow-xl border p-10 mx-auto rounded-none xl:m-5">
                    <figure className="mx-auto text-white"><img src='https://i.ibb.co/sPB6H2h/images.png' alt="icon" width={50} height={50} /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">
                            Assignment creation
                        </h2>
                    </div>
                </div>
                <div className="card w-3/4 xl:w-72 bg-[#7B67F6] text-white shadow-xl border p-10 mx-auto rounded-none">
                    <figure className="mx-auto text-white"><img src='https://i.ibb.co/dMk0LDM/image.png' alt="icon" width={50} height={50} /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">
                        Online Assignment & Check Marks
                        </h2>
                    </div>
                </div>
                <div className="card w-3/4 xl:w-72 bg-[#7B67F6] text-white shadow-xl border p-10 mx-auto rounded-none ">
                    <figure className="mx-auto text-white"><img src='https://i.ibb.co/d6P45jq/images-1-1.png' alt="icon" width={50} height={50} /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">
                        Asynchronous Learning
                        </h2>
                    </div>
                </div>
                <div className="card w-3/4 xl:w-72 bg-[#7B67F6] text-white shadow-xl border p-10 mx-auto rounded-none xl:m-5">
                    <figure className="mx-auto text-white"><img src='https://i.ibb.co/C7g172h/images-1.png' alt="icon" width={50} height={50} /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">
                        Critical Thinking Skills
                        </h2>
                    </div>
                </div>
            </div>
            <div className="space-y-5 flex-1 my-auto">
                <h2 className="text-2xl font-bold">About</h2>
                <p className="text-lg mt-40">
                    This is a studying online with friends and strangers is a game-changer for millions of students all over the world. Learning is a different experience for each person. Students can hear different perspectives on the subject and therefore understand it from more than position. This is useful in real-world settings where more than one solution or opinion bolsters creative and analytical thinking.
                </p>
            </div>
        </div>
    );
};

export default Features;