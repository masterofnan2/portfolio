import React from 'react'

type Props = {
    name: string,
    experience: string,
}

const Stack = React.memo((props: Props) => {
    const { name, experience } = props;

    return <div className='stack col-12 col-md-3'>
        <h3 className='text-dark'>{name}</h3>
        <span className='text-dark'>{experience}</span>
    </div>
});

export default Stack