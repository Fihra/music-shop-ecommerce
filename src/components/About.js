import React from 'react';
import { Slide } from '@material-ui/core';

const About = () => {
    return (
        <div>
            <Slide direction="left" in={true} timeout={1500} mountOnEnter unmountOnExit>
            <p>Welcome to the Music Shop! This is a small store where I sell my old music gear. Feel free to browse around  with what I have and what I am offering.</p>
            </Slide>
        </div>
    )
}

export default About;
