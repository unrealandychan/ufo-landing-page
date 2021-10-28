import {makeStyles} from "@mui/styles";
import {Button, Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
    root: {
        padding: "30px 100px",
        margin: "0px 100px"
    },
    box: {
        border: "1px solid white",
        height: 500,
        display: "flex",
    },
    left: {
        display:"flex",
        flexDirection:"column",
        padding: 15,
        flex: 1
    },
    image:{
        margin:50,
        padding:50,
      height:250,
        backgroundColor:"#444444"

    },
    right: {
        flex: 1,
        padding:20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    text:{
        padding:10,
    }
}))

export const EarlyBirdBlock = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <div className={classes.left}>
                    <Typography variant={'h4'}>
                        限定發行預購禮包
                    </Typography>
                    <div className={classes.image}>

                    </div>
                </div>
                <div className={classes.right}>
                    <div>
                        <Typography className={classes.text} variant={'body1'}>
                            你將會發掘出：
                        </Typography>
                        <Typography className={classes.text}  variant={'body1'}>
                            小型#ufo1陀螺盲盒*1 （隨機派發）
                        </Typography>
                        <Typography className={classes.text}  variant={'body1'}>
                            初回限定閃卡*1
                        </Typography>
                        <Typography className={classes.text}  variant={'body1'}>
                            貼紙*1
                        </Typography>
                    </div>
                    <div>
                        <Typography className={classes.text}  variant={'body1'}>
                            原價180+非賣品+10 =190
                            預購價150
                        </Typography>
                        <Typography className={classes.text}  variant={'body1'}>
                            於2021年11月出土
                        </Typography>
                    </div>
                    <Button size={'large'} variant={'contained'}>預購</Button>
                </div>
            </div>
        </div>
    )
}
