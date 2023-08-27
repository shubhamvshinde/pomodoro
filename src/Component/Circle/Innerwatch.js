import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Watchtext from './Watchtext';
import { useContext } from 'react';
import { StateContext } from '../Statep';
// import { useEffect } from 'react';


const useStyle = makeStyles({
    outerc:{
        height:'18.5rem',
        width:'18.5rem',
        borderRadius:'50%',
        display:'grid',
        placeItems:'center',
        
    },
    innerc:{
        background:'black',
        height:'17rem',
        width:'17rem',
        borderRadius:'50%',
        display:'grid',
        placeItems:'center',
    },
})


const Innerwatch = () => {
    const classes = useStyle();
    const { isTime } = useContext(StateContext);

    // useEffect(() => {
    //     isSetTime(time /(inittime / 100));
    // },[isSetTime]) 

      const gradient = `conic-gradient(orange ${isTime}%, transparent ${isTime}%)`;
  return (
    <div 
        isTime={isTime} 
        className={classes.outerc}
        style={{ backgroundImage: gradient }}
    >
        <div className={classes.innerc}>
          <Watchtext />
        </div>
    </div>
  )
}

export default Innerwatch