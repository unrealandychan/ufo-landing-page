import {makeStyles} from "@mui/styles";
import Image from "../asserts/product.jpeg";
import {CardMedia, Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
    root: {
        padding: 100,
        display: "flex",
        flexWrap:"wrap"
    },
    imageWrapper: {
        flex: 1,
        minWidth:250
    },
    textWrapper: {
        flex: 1,
        padding: 50,
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
    }

}))

export const SupportUsBlock = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.imageWrapper}>
                <CardMedia className={classes.image} component="img" image={Image}/>
            </div>

            <div className={classes.textWrapper}>
                <Typography variant={"body2"}>有關#UFO1大量未解細節需待繼續探索。我們將會持續發佈我們的發掘成果，並出售部分出土器物，以資助未來的發掘與研究工作。
                </Typography>
                <Typography variant={"body2"}>揭開超古代文明的神秘面紗，追尋失落的太初歷史，陶啟安的藝術考古工作，需要你們的支持。
                </Typography>
                <Typography variant={"h4"} align={"center"}>支持我們的考古計劃
                </Typography>
            </div>
        </div>
    )
}