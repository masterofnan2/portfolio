import React from "react";

type Props = {
    image: string,
    title: string,
    description: string,
}

const ProjectItem = React.memo((props: Props) => {
    const { image, description, title } = props;

    return <div className="project-item">
        <img src={image} className="mb-3"/>
        <h3 className="m-0">{title}</h3>
        <p className="text-primary m-0">{description}</p>
    </div>
})

export default ProjectItem;