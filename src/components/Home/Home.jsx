import React, { useState } from "react";
import { CssBaseline,  Grid, Button, Link} from "@mui/material";
import Hero from '../Hero/Hero';

function Greeting(props) {
    const choice = props.choice;
    if (choice>50) 
        return <>
            <Link href="https://www.getbadnews.com/books/spanish-la/intro">
                    <Button variant="outlined">Continúa aquí</Button>
                </Link>
                </>
    
    return <>
        <Link href="https://tetrismania.net/">
            <Button variant="contained">Continúa aquí</Button>
        </Link>
    </>
  }

const Home = () => {
    
    const [value, setValue] = useState(0);

    const randomValue = () => {
        const random = Math.floor(Math.random() * 100);
        setValue(random);
    }

    useState(() => {
        randomValue();
    }, []);

    return(
        <>
        <CssBaseline enableColorScheme/>
        <Hero/>
        <Grid container fixed mt={2} spacing={3}>
            <Grid container row xs={12}>
                <Grid xs={12} sm={6} md={6} pl={6}>
                    <Greeting choice={value}/>
                </Grid>
            </Grid>
            
            
        </Grid>
    </>
    )
};

export default Home;