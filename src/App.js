import {makeStyles} from "@mui/styles";
import {CountDownBlock} from "./widgets/countdownBlock";
import {UfoBackgroundBlock} from "./widgets/ufoBackgroundBlock";
import {SupportUsBlock} from "./widgets/supportUsBlock";
import {VideoBlock} from "./widgets/videoBlock";
import {LittleUFOBlock} from "./widgets/littleUFOBlock";
import {SprinnerBlock} from "./widgets/sprinnerBlock";
import {SizeBlock} from "./widgets/sizeBlock";
import {CreatorBlock} from "./widgets/creatorBlock";
import {ProgressBlock} from "./widgets/progressBlock";
import {ScheduleBlock} from "./widgets/scheduleBlock";
import {EarlyBirdBlock} from "./widgets/earlyBirdBlock";


const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        height: "100vh",
        background: "#000000",
    },
}))

function App() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <CountDownBlock/>
            <UfoBackgroundBlock/>
            <SupportUsBlock/>
            <VideoBlock/>
            <LittleUFOBlock/>
            <SprinnerBlock sprinnerName={"Emerald Green 綠寶石"}/>
            <SprinnerBlock sprinnerName={"Ruby Red 紅寶石"}/>
            <SprinnerBlock sprinnerName={"Sapphire Blue 藍寶石"}/>
            <SprinnerBlock sprinnerName={"Onyx Black 縞瑪瑙"}/>
            <SizeBlock/>
            <CreatorBlock/>
            <ProgressBlock/>
            <ScheduleBlock/>
            <EarlyBirdBlock/>
        </div>

    );
}

export default App;
