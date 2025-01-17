import data from "../../data/index.json"

export default function MyExperience() {
    return (
        <section className = "experience--section" id = "MyExperience">
            <div className = "portfolio--container--box">
                <div className = "portfolio--container">
                    <h2 className = "skills--section--heading">My Experience</h2>
                </div>
            </div>
            <div className = "portfolio--section--container">
                {data?.experience?.map((item, index) => (
                    <div key = {index} className = "experience--section--card">
                        <div className = "portfolio--section--img">
                            <img src = {item.src} alt = "Placeholder Image" />
                        </div>

                        <div className = "portfolio--section--card--content">
                            <div>
                                <h3 className = "portfolio--section--title">{item.title}</h3>
                                <br />
                                <p className = "text-md">{item.description}</p>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </section>
    )
}