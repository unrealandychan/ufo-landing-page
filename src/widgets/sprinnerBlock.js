import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
    root: {
        padding: "50px 100px",
        display: "flex",
        flexDirection: "column"
    },
    bodyWrapper: {
        display: "flex",
        flexWrap:"wrap"
    },
    imageWrapper: {
        height: 750,
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        background: "#777"
    },
    textWrapper: {
        flex: 1,
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
}))

export const SprinnerBlock = (props) => {

    const sprinnerName = props.sprinnerName;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.bodyWrapper}>
                <div className={classes.imageWrapper}>
                    <Typography variant={"h4"}>{`${sprinnerName} Image`}</Typography>
                </div>
                <div className={classes.textWrapper}>
                    <Typography variant={"h4"} align={"center"}>{sprinnerName}</Typography>
                </div>
            </div>
        </div>
    )
}