import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
// import VerifyButton from "./verifyBtn";


const useStyles = makeStyles((theme)=>({
    title:{
        display:'flex',
        justifyContent:'space-around',
        fontSize:'60px',
        color:'indigo',
        fontWeight:'900',
        margin:'20px',
    }

}))


const Title = () => {
    const classes = useStyles();
  return (
    <div>
        <Typography className={classes.title}>Pomodoro App</Typography>
        {/* <VerifyButton /> */}
    </div>
  )
}

export default Title