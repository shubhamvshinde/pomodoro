import { Button, Grid, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { StateContext } from './Statep';


const useStyles = makeStyles((theme) =>({
    tags:{
        background:'primary',
        height:'3rem',
        width:'30rem',
        display:'flex',
        margin:' 20px auto ',
        borderRadius:'20px',
        gap:'1rem',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column', // Change to column layout on small screens
            width: '100%', // Full width on small screens
        },
    },
    tagtext:{
        flex:'1',
        color:'white',
        fontWeight:'800',
        // backgroundColor:'orange',
        borderRadius:'20px',
        margin:'3px',
    },
    activeBtn:{
        backgroundColor:'orange',
    },
    inActiveBtn:{
        backgroundColor:'Black',
    }

}))

const Tags = () => {
    const classes = useStyles();
    const {activeTag, setActiveTag} = useContext(StateContext);

    const handleClick = (index) => {
        setActiveTag(index);
    }
  return (
    <div>
        <Grid container className={classes.tags}>
            {['work', 'short break'].map((tag, i)=>(
                <Button 
                    key={i} 
                    className={
                            `${classes.tagtext} 
                            ${activeTag === i ? classes.activeBtn :classes.inActiveBtn}`}
                    onClick={()=>handleClick(i)}>{tag}</Button>
            ))}
        </Grid>
    </div>
  )
}

export default Tags;