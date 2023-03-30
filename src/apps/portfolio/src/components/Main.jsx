import React from 'react'
import { createUseStyles } from "react-jss";
import Jonny from "./Jonny/Jonny"
import Leah from "./Leah/Leah"
import Blewitt from "./Blewitt/Blewitt"

export default function Main() {
    const classes = useStyles();

    const blewittRef = React.createRef()
    return (
        <div className={`${classes.main}`}>
            <Jonny />
            <Blewitt buttonLinks={classes.buttonLinks} ref={blewittRef} />
            <Leah />
        </div>
    )
}

const useStyles = createUseStyles({
    main: {
        display: 'flex',
        flexDirection: 'Row',
        height: 'infinite',
        width: '300%',
        background: '#262626',
        '& span': {
            width: '100%',
            height: '100%',
        }
    },
    buttonLinks: {
        height: "200px",
        width: "100px",
        backgroundColor: "black",
        textAlign: "center",
        color: "white",
        position: "absolute",
        top: "20%",
    }
});
