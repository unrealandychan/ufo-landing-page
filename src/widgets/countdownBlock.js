import {Typography} from "@mui/material";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap:"wrap",
        paddingTop: 100,
        paddingBottom:100,
        textAlign: "center"
    },
    time: {
        "font-size": 40
    },
    circleWrapper: {
        marginTop:15,
        backgroundColor: "#ffffff",
        "border-radius": "80%",
    }
}))

export const CountDownBlock = () => {
    const classes = useStyles();

    const minuteSeconds = 60;
    const hourSeconds = 3600;
    const daySeconds = 86400;

    // Time properties here.
    const timerProps = {
        isPlaying: true,
        size: 300,
        strokeWidth: 15,
        trailColor: "#aaaaaa",
    };

    const renderTime = (dimension, time) => {
        return (
            <div className="time-wrapper">
                <div className={classes.time}>{time}</div>
                <div>{dimension}</div>
            </div>
        );
    };

    const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
    const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
    const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
    const getTimeDays = (time) => (time / daySeconds) | 0;

    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = 1638316800; // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <div className={classes.root}>
            <div className={classes.circleWrapper}>
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#7E2E84"]]}
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                >
                    {({elapsedTime}) =>
                        <Typography
                            variant={"h6"}>{renderTime("Days", getTimeDays(daysDuration - elapsedTime))}</Typography>
                    }
                </CountdownCircleTimer>
            </div>
            <div className={classes.circleWrapper}>
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#D14081"]]}
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={(totalElapsedTime) => [
                        remainingTime - totalElapsedTime > hourSeconds
                    ]}
                >
                    {({elapsedTime}) =>
                        <Typography
                            variant={"h6"}>{renderTime("Hours", getTimeHours(daySeconds - elapsedTime))}</Typography>
                    }
                </CountdownCircleTimer>
            </div>
            <div className={classes.circleWrapper}>
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#EF798A"]]}
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={(totalElapsedTime) => [
                        remainingTime - totalElapsedTime > minuteSeconds
                    ]}
                >
                    {({elapsedTime}) =>
                        <Typography
                            variant={"h6"}>{renderTime("Minutes", getTimeMinutes(hourSeconds - elapsedTime))}</Typography>
                    }
                </CountdownCircleTimer>
            </div>
            <div className={classes.circleWrapper}>
                <CountdownCircleTimer

                    {...timerProps}
                    colors={[["#218380"]]}
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => [
                        remainingTime - totalElapsedTime > 0
                    ]}
                >

                    {({elapsedTime}) =>
                        <Typography variant={"h6"}>{renderTime("Seconds", getTimeSeconds(elapsedTime))}</Typography>
                    }
                </CountdownCircleTimer>
            </div>
        </div>
    )
}