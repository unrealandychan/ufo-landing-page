import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    root: {
        padding: 100,
        display: "flex",
        flexDirection: "column"
    },
    paper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 500,
        backgroundColor: "#444444"
    },
    textWrapper: {
        padding: 10,
    },
    text: {
        padding: 10,
    }
}))

export const VideoBlock = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.paper}>
                <Typography variant={"h2"}>Video Here</Typography>
            </div>
            <div className={classes.textWrapper}>
                <Typography className={classes.text} variant={"subtitle2"}>
                    研究認為古代部落在進行祭祀儀式時，伴隨演奏和吟唱，巫師們會依次轉動陀螺。陀螺轉動的時間愈持久，代表巫師的法力愈強大。
                </Typography>
                <Typography className={classes.text} variant={"subtitle2"}>
                    陀螺迴環往復，持久不息的運動，令古人聯想到人與永恆宇宙的溝通，並由此為部落帶來吉祥力量。
                </Typography>
            </div>
        </div>
    )
}