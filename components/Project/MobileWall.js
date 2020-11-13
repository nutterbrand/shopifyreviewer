import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle';
import MobileWallImg from '../../assets/img/mobile_wall.svg';
import useWindowDimensions from './helpers/useWindowDimensions';

const useStyles = makeStyles(productStyle);

export const MobileWall = () => {
  const {width} = useWindowDimensions();
  const classes = useStyles();
  if (width > 860) return null;
  return (
      <div className={classes.mobileWall}>
        <img className={classes.mobileWallImg} src={MobileWallImg}/>
        <h3 className={classes.mobileWallText}>This is only available on Desktop right now</h3>
      </div>
  );
};
