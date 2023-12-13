
const ContactUs = () => {
    return (
        <div className='container m-16'>
            <div className='text-center'>
                <h2 className="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-white">Contact</h2>
            </div>
            <form className="flex max-w-md flex-col gap-4 mx-auto" action='https://formspree.io/f/mvojplja' method='POST'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Phone Number</span>
                    </label>
                    <input type="number" name="phone" placeholder="Your Phone Number" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <textarea type="number" name="message" placeholder="Your Message" className="textarea textarea-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn" type="submit">Contact</button>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;