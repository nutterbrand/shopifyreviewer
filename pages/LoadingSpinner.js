import React, {useState, useEffect, useRef} from 'react';
import classNames from 'classnames';
import LinearProgress from '@material-ui/core/LinearProgress';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../assets/jss/nextjs-material-kit-pro/pages/productStyle';

const useStyles = makeStyles(productStyle);
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const LoadingSpinner = ({loadingImages, loadingMessages}) => {
  const normalise = value => value * 100 / ( loadingImages.length );

  const classes = useStyles();
  const [delay, setDelay] = useState(3000);
  const [count, setCount] = useState(0);
  useInterval(() => {
        setCount(count + 1);
        setDelay(3000);
      },
      count < loadingMessages.length - 1 ? delay : null,
  );
  return (
      <div className={classes.center}>
        {loadingImages && (
            <div className={classes.loadingSpinnerContainer}>
              {loadingImages.map((src, index) => (
                  <img src={src} key={index} className={classNames(classes.loadingSpinnerImage,
                      {[ classes.shown ]: index === count})}/>
              ))}
              <div className={classes.loadingSpinnerProgress}>
                <h4>{loadingMessages[ count ]}</h4>
                <LinearProgress variant="determinate"
                    value={normalise(count + 1)}/>
              </div>
            </div>
        )}
        {!loadingImages && loadingMessages[ count ]}
      </div>
  );
};
