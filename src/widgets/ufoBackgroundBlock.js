import Image from "../asserts/background.jpeg"

import {makeStyles} from "@mui/styles";
import {CardContent, CardMedia, Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
    root: {
        position: "relative",
        textAlign: "center",
        background: "#000000"
    },
    image: {
        height: "auto",
        position: "absolute",
        maskImage: `linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0))`
    },
    content: {
        position: "relative",
        backgroundColor: "transparent"
    },
    textWrapperTop: {
        marginTop: "45%",
        padding: "0% 10%"
    },
    text: {
        padding: 15,
    },
    textWrapperMiddle: {
        marginTop: 20,
        padding: "0% 10%",
    },
    textWrapperBottom: {
        marginTop: 40,
    }
}))


export const UfoBackgroundBlock = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CardMedia className={classes.image} component="img" image={Image}/>
            <CardContent className={classes.content}>
                <div className={classes.textWrapperTop}>
                    <Typography className={classes.text} variant={"body2"}>
                        圓周運動，完美的軌道，永恆的能量。無起點，無終點，周而復始，生生不息。是萬物寄存的天地依循運轉的跡轍。
                    </Typography>
                    <Typography className={classes.text} variant={"body2"}>
                        人類工藝對圓周運動最早的馴服：陀螺，分別而重復地被世界各地的古代文明所發明。指頭一撥，迷人的旋轉，精妙地平衡自重，屹立不倒。戰勝重力的不思議能力仿佛揭露著大自然深奧神秘的大能 。
                    </Typography>
                </div>
                <div className={classes.textWrapperMiddle}>
                    <Typography className={classes.text} variant={"body2"}>
                        編號TKOB-24YRS-OBJS#UFO1。
                    </Typography>
                    <Typography className={classes.text} variant={"body2"}>
                        香港出土，來自遠古時代的炻器，神秘古代部落的重要圖騰。
                    </Typography>
                </div>
                <div className={classes.textWrapperBottom}>
                    <Typography className={classes.text} variant={"subtitle2"}>
                        專門研究香港超古代文明的考古藝術家陶啟安在2020年發掘出#UFO1，相信為遠古時代用於原始部落宗教祭祀儀式中的重要器物，鄰近地區同時出土的還有一系列樂器。
                    </Typography>
                    <Typography className={classes.text} variant={"subtitle2"}>
                        #UFO1獨特的陀螺造型使之可以高速旋轉。器物上半部的形狀隱近後世佛教的塔式建築——窣堵坡（stupa)，但由於兩者出現的年代與地區相距甚遙，難以斷定兩者之間有何聯繫。
                    </Typography>
                    <Typography className={classes.text} variant={"subtitle2"}>
                        #UFO1的形象以圖騰的形式在古代遺跡中多次重復出現，顯示其於當時部落中有著顯著的文化重要性和象徵意義。#UFO1神秘造型的由來，以及其作為圖騰的寓意，仍然未有定論。
                    </Typography>
                </div>
            </CardContent>
        </div>

    )
}