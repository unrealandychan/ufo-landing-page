
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
    root: {
        padding: "30px 100px",
        display: "flex",
        flexDirection: "column"
    },
    titleWrapper: {
        paddingBottom: 40,
    },
    imageWrapper: {
        display:"flex",
        flexWrap: "wrap",
        justifyContent:"space-between",
    },
    greyBlock:{
        minWidth:"45%",
        margin:10,
        width: 350,
        height:350,
        backgroundColor:"#444"
    }
}))

export const ProgressBlock = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.titleWrapper}>
                <Typography variant={"h4"} align={"center"}>發掘過程</Typography>
            </div>
            <div className={classes.imageWrapper}>
                <GreyBlock/>
                <GreyBlock/>
                <GreyBlock/>
                <GreyBlock/>
            </div>
        </div>
    )
}

const GreyBlock = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.greyBlock}>

        </div>
    )
}