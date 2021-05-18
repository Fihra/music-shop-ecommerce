import React, { useState, useEffect} from 'react'
import { Collapse } from '@material-ui/core';

const Home = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, [])

    return (
        <Collapse in={open} timeout={1000}>
        <div>
           <h1>Hi There It me!</h1>
        </div>
        </Collapse>
    )
}

export default Home
