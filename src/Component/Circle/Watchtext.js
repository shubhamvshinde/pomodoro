import { makeStyles } from '@material-ui/styles';
import { Typography, Button } from '@material-ui/core';
import { useEffect, useContext } from 'react';
import { StateContext } from '../Statep';

const useStyles = makeStyles({
    timingtext :{
        all:'unset',
        color:'white',
        fontSize:'4rem',
        letterSpacing:'2px',
        display:'grid',
        textAlign:"center",
        fontWeight:'800',
    },
    startpause :{
        all:'unset',
        color:'white',
        fontSize:'2.5rem',
        letterSpacing:'2.5px',
        display:'grid',
        textAlign:'center',
        margin:'auto'
    },
    resetBtn:{
        all:'unset',
        color:'red',
        fontSize:'1.5rem',
        letterSpacing:'1.5px',
        display:'grid',
        textAlign:'center',
        margin:'auto'
    }
})

const Watchtext = () => {
    const classes = useStyles()
    const {time, setTime, isActive, setIsActive, inittime} = useContext(StateContext);

    useEffect(() =>{
        if(isActive && time > 0) {
            const interval = setInterval(() => {
            setTime((time) => time - 1);
        }, 1000);
            return () => clearInterval(interval)
        }
    },[time,isActive, setTime]);

    const toggleClock = () => {
        setIsActive(!isActive)
    }

    const resetTime = () => {
        setTime(inittime)
        setIsActive(false)
    };
    console.log(time)

    const getTime =(time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${min < 10 ? '0' + min : min} : ${sec <10 ? '0' + sec:sec}`
    };

  return (
    <>
    <div>
        <Typography className={classes.timingtext}>
            {getTime(time)}
        </Typography>
        <Button className={classes.startpause} 
            onClick={toggleClock}>{isActive ? 'PAUSE' : 'START'}
        </Button>
        {time === 0 && <Button className={classes.resetBtn} onClick={resetTime}>RESET</Button>}
    </div>    
    </>
  )
}

export default Watchtext