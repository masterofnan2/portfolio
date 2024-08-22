import React from "react";

type Props = {
    logo: string,
    name: string,
}

const TechnologyItem = React.memo((props: Props) => {
    const { name, logo } = props;

    return <div className="technology-item d-flex flex-column align-items-center gap-2">
        <img src={logo} className="rounded img-responsive"/>
        <h4 className="text-dark">{name}</h4>
    </div>
});

export default TechnologyItem;