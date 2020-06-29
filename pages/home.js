import React, {useState} from 'react';
import {useRouter} from 'next/router';
import _ from 'underscore';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import useSwr from 'swr';
import {Header} from './Header';
import {CompanyHeader} from './CompanyHeader';
import {LoadingSpinner} from './LoadingSpinner';
import {KeywordGroup} from './KeywordGroup';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(productStyle);
const fetcher = url => fetch(url).then((res) => res.json());

export default function HomePage() {
  const classes = useStyles();
  const router = useRouter();
  const showAll
      = _.has(router.query, 'show');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {data, error} = useSwr('https://evening-retreat-22032.herokuapp.com/domain/woodencork.com', fetcher);
  if (error) return <span className={classes.center}>Failed to load data</span>;
  if (!data) return <LoadingSpinner
      loadingImages={
        [
          'https://henrymetricstory.s3-us-west-1.amazonaws.com/load_1.png',
          'https://henrymetricstory.s3-us-west-1.amazonaws.com/load_2.png',
          'https://henrymetricstory.s3-us-west-1.amazonaws.com/load_3.png',
        ]
      }
      loadingMessages={[
        'Downloading Amazon Product Page...',
        'Analyzing Competitors...',
        'Building Landing Page...',
      ]}
  />;
  return (
      <>
        <Header/>
        <div className={classes.companyPage}>
          <div className={classes.section}>
            <div className={classes.container}>
              <CompanyHeader/>
              {
                data.result.map(
                    (result, i) => <KeywordGroup result={result} handleOpen={handleOpen} key={result.keyword} index={i}
                                                 showAll={i < 10 || showAll}/>)
              }
            </div>
          </div>
        </div>
        <Modal open={open} onClose={handleClose} className={classes.modalContainer}>
          <div className={classes.modal}>
            <Button color="secondary" variant="contained" size="large" target="_" href='https://apps.shopify.com/keyword-genius'>
              Download Here</Button>
          </div>
        </Modal>
      </>
  );
}
