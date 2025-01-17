export default function MainSection() {
    return (
        <section id= "mainSection" className = "main--section">
            <div className="main--section--content--box">
                <div className="main--section--content">
                    <p className="section--title"> Hey, I'm Aryan </p>
                    <h1 className="main--section--title">
                        <span className="main--section--title--color">Software Developer</span> {" "}
                        <br />
                    </h1>
                    <p className="main--section--description">
                        I’m driven by curiosity, building with code, and finding creative ways to make a difference in the world.
                    </p>
                </div>

                <a href="mailto:aryansumit0102@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-primary">
                        Get In Touch
                    </button>
                </a>

            </div>

            <div className="main--section--img">
                <img src = "./img/Headshot Photo.jpg" alt = "Main Section" />
            </div>
        </section>
    )
}

