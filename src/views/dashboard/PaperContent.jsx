import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function PaperContent() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="p" variant="h4">
       44.51
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Mission
        </Link>
      </div>
    </React.Fragment>
  );
}