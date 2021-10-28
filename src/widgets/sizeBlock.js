import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
    root: {
        padding: 50,
        display: "flex",
        flexDirection:"column"
    },
    titleWrapper: {
        paddingBottom: 40,
    },
    paper: {
        margin:100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 750,
        backgroundColor: "#444444"
    },
}))

export const SizeBlock = ()=>{
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.titleWrapper}>
                <Typography variant={"h4"} align={"center"}>尺寸</Typography>
            </div>
            <div className={classes.paper}>
                <Typography variant={"h2"}>Size Image Here</Typography>
            </div>
        </div>
    )
}