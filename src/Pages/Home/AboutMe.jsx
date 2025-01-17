export default function MainSection() {
    return (
        <section id = "AboutMe" className = "about--section">
            <div className = "about--section--img border">
                <img src = "./img/neu.jpg" alt = "Northeastern"/>
            </div>

            <div className = "main--section--content--box">
                <div className = "main--section--content">
                    <h1 className = "skills--section--heading">About Me</h1>
                    <p className = "main--section--description">
                        I am a first year student at Khoury College of Computer Science at Northeastern University
                    </p>

                    <p className = "main--section--description">
                        I have a love for all things tech, especially AI and web development. I enjoy tackling real-world challenges through creative projects and building tools which make life a little easier. When I am not coding you will find me learning more about global cultures, folding origami, or volunteering at the National Braille Press. Im passionate about blending technology with meaningful community impact and I am always excited to learn something new!
                    </p>

                </div>
            </div>
        </section>
    )
}