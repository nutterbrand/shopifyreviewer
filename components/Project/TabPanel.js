import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../../assets/jss/nextjs-material-kit-pro/pages/productStyle';

const useStyles = makeStyles(productStyle);

export const TabPanel = (props) => {
  const classes = useStyles();
  const {children, value, index, ...other} = props;
  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
      >
        {value === index && (
            <Box className={classes.tabPanel} p={3}>
              <Typography component={'span'}>{children}</Typography>
            </Box>
        )}
      </div>
  );
};
