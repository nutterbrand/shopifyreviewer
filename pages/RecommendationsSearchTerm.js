import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';

const useStyles = makeStyles(productStyle);

export const RecommendationsSearchTerm = (props) => {
  const {products, yourCompany, companyListings, keyword} = props;

  const classes = useStyles();

  return (
      <>
        {yourCompany.rank_absolute <= 10 &&
        <div className={classes.rec}><Icon className={classes.recGreen} fontSize="small">thumb_up</Icon>
          Good Job! Your rank is<b className={classes.recGreen}>#{yourCompany.rank_absolute}</b>on Google, your
          customers will be able to see your website from the first page
        </div>
        }
        {yourCompany.rank_absolute > 10 && yourCompany.type === 'organic' &&
        <div className={classes.rec}><Icon className={classes.recRed} fontSize="small">thumb_down</Icon>
          Your rank is<b className={classes.recRed}>#{yourCompany.rank_absolute}</b>on Google so you are not
          having customers see your page for this keyword. Make sure to have a Google Ad running for this ad to show
          on the top of Google.
        </div>
        }
      </>
  );
};
