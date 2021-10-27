import {makeStyles} from "@mui/styles";
import {CountDownBlock} from "./widgets/countdownBlock";
import {UfoBackgroundBlock} from "./widgets/ufoBackgroundBlock";
import {SupportUsBlock} from "./widgets/supportUsBlock";
import {VideoBlock} from "./widgets/videoBlock";


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
        </div>

    );
}

export default App;
