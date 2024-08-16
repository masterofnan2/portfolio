import React from 'react'

type Props = {
    name: string,
    experience: string,
}

const Stack = React.memo((props: Props) => {
    const { name, experience } = props;

    return <div className='stack'>
        <h3>{name}</h3>
        <p>{experience}</p>
    </div>
})

export default Stack