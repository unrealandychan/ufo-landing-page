import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
    root: {
        padding: "0 100px",
        display: "flex",
        flexDirection: "column"
    },
    titleWrapper: {
        paddingBottom: 40,
    },
    bodyWrapper: {
        display: "flex",
        flexWrap: "wrap",
    },
    imageWrapper: {
        height: 750,
        flex: 1,
        display: "flex",
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
    bottomWrapper: {
        marginTop:20,
        padding:15,
        display: "flex",
        justifyContent: "center",
        width:"100%"
    }
}))

export const LittleUFOBlock = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.titleWrapper}>
                <Typography variant={"h4"} align={"center"}>小型出土器物</Typography>
            </div>
            <div className={classes.bodyWrapper}>
                <div className={classes.imageWrapper}>
                    <Typography variant={"h4"}>Image Here</Typography>
                </div>
                <div className={classes.textWrapper}>
                    <Typography variant={"h2"} align={"center"}>小型#UFO1</Typography>
                </div>
            </div>
            <div className={classes.bottomWrapper}>
                <Typography variant={"body2"} align={"center"}>
                    由透明材質製成的小型陀螺，相信為原祖#UFO1的復製品。
                    小巧的尺寸，方便古代巫師攜帶，並於作法時隨時隨地在不同平面上轉動，以祈求吉祥。
                </Typography>
            </div>
        </div>
    )
}