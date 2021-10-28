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
        display: "flex"
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
        flexDirection: "column",
        justifyContent: "space-around"
    },
    text:{
        padding: 5,
    },
    gazeWrapper:{
        padding:30,
        display: "flex"
    },
    gazeIntroduction:{
        padding:30,
        flex:3,
    },
    logo:{
        flex:1,
        padding:10,
        margin:10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#555"
    }
}))

export const CreatorBlock = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.titleWrapper}>
                <Typography variant={"h4"} align={"center"}>創作者</Typography>
            </div>
            <div className={classes.bodyWrapper}>
                <div className={classes.imageWrapper}>
                    <Typography variant={"h4"}>Creator Image Here</Typography>
                </div>
                <div className={classes.textWrapper}>
                    <div>
                        <Typography className={classes.text} variant={"body2"}>Benny 陶啟安</Typography>
                        <Typography className={classes.text} variant={"body2"}>陶瓷藝術家陶啟安以假想考古學方式，創作虛構的古代器物，重新想像歷史丶宗教與流行文化的關係。</Typography>
                    </div>
                    <Typography className={classes.text}
                        variant={"body2"}>陶啟安從史前以及早期文明的藝術之中得到啟發：古代人從大自然中得到知性和靈性上的啟悟，發展出宗教神話，並通過創造圖騰和塑像，把他們生命中最深刻的願望與幻想轉化成實物。陶啟安自覺在現代的流行文化中得到類似的滋養和啟迪。他從科幻類型的動漫丶特攝和電影中選材，把當中的角色和道具製作成偽造的歷史文物，作品仿如是千年以後的未來人對現今時代的考古發現。這些具代表性的流行文化作品對千禧一代影響深遠，在他們的童年裏充當了崇拜與幻想的對象，並在成長的過程裏形塑了他們的世界觀與價值觀。陶啟安倒模現成的塑膠玩具，再運用傳統的陶藝技法，以陶瓷——在古代用以製作儀禮重器，具歷史證物意味的媒介，重新覆述現代工業大量生產的造型。</Typography>
                    <Typography className={classes.text}
                        variant={"body2"}>陶啟安的創作溝通虛擬與現實，用自製歷史文物的形式把處於二次元世界中但對現實世界有廣泛而公共的影響的事物紀錄下來。他摹仿古人把願望和幻想轉化成藝術的作法，把千禧一代的願望與幻想化成實物，有如從時代中取下切片一般記錄了集體的精神面貌。他通過虛構文物營造出的假想考古學，令觀者置身未來人的視角回看當代社會，察見文明的過去丶現在丶未來的連貫性。</Typography>
                </div>
            </div>
            <div className={classes.gazeWrapper}>
                <div className={classes.gazeIntroduction}>
                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                </div>
                <div className={classes.logo}>
                    <Typography>Logo Here</Typography>
                </div>
            </div>
        </div>
    )
}