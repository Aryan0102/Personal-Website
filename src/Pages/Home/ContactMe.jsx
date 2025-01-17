export default function ContactMe() {
    return (
        <section id = "Contact" className = "contact--section">
            <div>
                <h2 className = "skills--section--heading">Contact Me</h2>
                <p className = "text-lg">
                    Feel free to use this contact field, otherwise I am available at + 1 (570)-236-4213 or aryansumit0102@gmail.com
                </p>
            </div>

            <form className = "contact--form--container" action = "https://formspree.io/f/mvgovkeq" method = "post">
                <div className = "container">
                    <label htmlFor = "first-name" className = "contact--label">
                        <span className = "contact-md">First Name</span>
                        <input 
                            type = "text"
                            className = "contact--input text-md"
                            name = "first-name"
                            id = "first-name"
                            required
                        />
                    </label>

                    <label htmlFor = "last-name" className = "contact--label">
                        <span className = "contact-md">Last Name</span>
                        <input 
                            type = "text"
                            className = "contact--input text-md"
                            name = "last-name"
                            id = "last-name"
                            required
                        />
                    </label>

                    <label htmlFor = "email" className = "contact--label">
                        <span className = "contact-md">Email</span>
                        <input 
                            type = "email"
                            className = "contact--input text-md"
                            name = "email"
                            id = "email"
                            required
                        />
                    </label>

                    <label htmlFor = "phone-number" className = "contact--label">
                        <span className = "contact-md">Phone Number</span>
                        <input 
                            type = "number"
                            className = "contact--input text-md"
                            name = "phone-number"
                            id = "phone-number"
                            required
                        />
                    </label>
                </div>

                <label htmlFor = "choose-topic" className = "contact--label">
                    <span className = "contact-md">Choose Topic</span>
                    <select id = "choose-topic" className = "contact--input text-md" name = "choose-topic" required>
                        <option>Select One...</option>
                        <option>Projects/Experiences</option>
                        <option>Research</option>
                        <option>Northeastern Information</option>
                        <option>General Question</option>
                    </select>
                </label>

                <label htmlFor = "message" className = "contact--label">
                    <span className = "contact-md">Message</span>
                    <textarea
                        className = "contact--input text-md"
                        id = "message"
                        name = "message"
                        rows = "8"
                        placeholder = "Type your message"
                        required
                    />
                </label>
                <div>
                    <button type = "submit" className = "btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form>
        </section>
    )
}