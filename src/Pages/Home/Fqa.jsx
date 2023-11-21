
const Fqa = () => {
    return (
        <div className="p-10 flex flex-col items-center justify-between xl:flex-row ">
            <div className="w-full  mb-12 xl:mb-0 xl:pr-16 xl:w-5/12">
                <img src="https://i.ibb.co/V3JkT83/img.png" alt="" className="mx-auto"/>
            </div>
            <div className="w-full  xl:w-7/12">
                <div className="collapse collapse-arrow border shadow-xl mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do i create an assignment?
                    </div>
                    <div className="collapse-content">
                        <p>If you are logged in successcfully then you can create an assignment </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border shadow-xl mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do i view assignment details?
                    </div>
                    <div className="collapse-content">
                        <p>If you are logged in successcfully then you can view each assignment details</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border shadow-xl mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do i manage assignment?
                    </div>
                    <div className="collapse-content">
                        <p>If you are logged in successcfully then you can manage your assignment </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fqa;