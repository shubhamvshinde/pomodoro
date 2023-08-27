import { makeStyles } from '@material-ui/core';
import Innerwatch from './Circle/Innerwatch';

const useStyles = makeStyles({
  circle:{
    background:'grey',
    margin:'30px auto',
    height:'22rem',
    width:'22rem',
    borderRadius:'50%',
    display:'grid',
    placeItems:'center',
    boxShadow:'0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.2), 0 0 30px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.2), 0 0 60px rgba(0, 0, 0, 0.2), 0 0 70px rgba(0, 0, 0, 0.2), 0 0 80px rgba(0, 0, 0, 0.2), 0 0 90px rgba(0, 0, 0, 0.2), 0 0 100px rgba(0, 0, 0, 0.2)',
  }
})
const Watch = () => {
  const classes = useStyles();

  return (
    <>
        <div className={classes.circle}>
          <Innerwatch />
        </div>
    </>
  )
}

export default Watch;