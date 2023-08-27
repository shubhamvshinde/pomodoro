import { makeStyles } from "@material-ui/styles";
import Title from "./Component/Title";
import Tags from "./Component/Tags";
import Watch from "./Component/Watch";
import LoginBtn from "./LoginBtn";


const useStyles = makeStyles({
  appfile: {
    alignItems:'center',
    textAlign:'center',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(390deg, black,magenta,violet)',
  }
})
function App() {
  const classes = useStyles();
  return (
      <div className={classes.appfile}>
        <LoginBtn />
        <Title />
        <Watch />
        <Tags />
      </div>
  );
}

export default App;
