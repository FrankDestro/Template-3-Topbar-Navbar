import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import { NavLink } from 'react-router-dom';
import './styles.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  })
);

export default function Menu() {
  const classes = useStyles();

  return (
    <div className="base-card menu-container">
      <Breadcrumbs aria-label="breadcrumb">
        
        <NavLink color="inherit" to="/page1" className={classes.link}>
          <HomeIcon className={classes.icon} />
          Pagina 1
        </NavLink>

        <NavLink color="inherit" to="/page2" className={classes.link}>
          <WhatshotIcon className={classes.icon} />
          Pagina 2
        </NavLink>
      </Breadcrumbs>
    </div>
  );
}

