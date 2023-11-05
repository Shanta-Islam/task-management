
const Fqa = () => {
    return (
        <div className="p-10">
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
    );
};

export default Fqa;