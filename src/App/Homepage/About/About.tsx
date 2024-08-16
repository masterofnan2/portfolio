import Stack from "../../../partials/Stack/Stack";

const stacks = [
    {
        name: "Front-End",
        experience: "6+ months experience",
    },
    {
        name: "Back-End",
        experience: "6+ months experience",
    },
    {
        name: "Server",
        experience: "3+ months experience",
    },
];

const About = () => {
    return <div className="about d-flex flex-column gap-3">
        <h2 className="display-5 text-primary d-flex gap-3 col-12 align-items-center m-0">
            about
        </h2>
        <p className="mx-5">
            Motivé et déterminé, à la recherche d'opportunités qui me permettront de mettre
            en pratique mes connaissances et de participer au succès de votre entreprise.
        </p>
        <div className="d-flex justify-content-around">
            {stacks.map((stack, key) => <Stack name={stack.name} experience={stack.experience} key={key} />)}
        </div>
    </div>
}

export default About