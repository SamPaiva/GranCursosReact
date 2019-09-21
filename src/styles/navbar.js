import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    nav: {
        backgroundColor: '#10102C',
        margin: 0
    },
    removeSublimed: {
        textDecoration: 'none'
    }
  }));

export default useStyles;