import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import {Chrono} from "react-chrono";

const useStyles = makeStyles(() => ({
    root: {
        padding: "30px 100px",
        display: "flex",
        flexDirection: "column"
    },
    titleWrapper: {
        paddingBottom: 40,
    },
    scheduleWrapper: {},

}))

const items = [{
    title: "初回發掘結果釋出",
    cardTitle: "初回發掘結果釋出",
    cardSubtitle: "Card Subtitle",

},
    {
        title: "預購開始",
        cardTitle: "預購開始", cardSubtitle: "Card Subtitle",
    },
    {
        title: "第二彈發掘結果釋出",
        cardTitle: "第二彈發掘結果釋出", cardSubtitle: "Card Subtitle",
    },
    {
        title: "預購結束",
        cardTitle: "預購結束", cardSubtitle: "Card Subtitle",
    },
    {
        title: "第一期發掘成果展覧",
        cardTitle: "第一期發掘成果展覧", cardSubtitle: "Card Subtitle",
    },];

export const ScheduleBlock = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.titleWrapper}>
                <Typography variant={"h4"} align={"center"}>計劃日程</Typography>
            </div>
            <div className={classes.scheduleWrapper}>
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    hideControls
                    cardHeight={100}
                    theme={{
                        primary: "blue",
                        secondary: "white",
                        cardBgColor: "white",
                        cardForeColor: "black",
                        titleColor: "black"
                    }}
                />
            </div>
        </div>
    )
}

