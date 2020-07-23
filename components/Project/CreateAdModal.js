import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(productStyle);

export const CreateAdModal = (props) => {
  const {ad, createAdModalOpen, keywords, toggleAdModal, toggleEmailModal, updatePostData} = props;
  const adHeadlinesArr = ad ? [
    ad[ 'headline-1' ],
    ad[ 'headline-2' ],
    ad[ 'headline-3' ],
    ad[ 'headline-4' ],
    ad[ 'headline-5' ],
    ad[ 'headline-6' ]] : [];

  const dailySpendArr = [8, 10, 12];

  const [adSelection, updateAdSelection] = useState(
      {
        headlineSelect1: '',
        headlineSelect2: '',
        headlineSelect3: '',
        description1: '',
        description2: '',
      });
  const [spend, updateSpendSelection] = useState(8);
  const handleAdDailySpendChange = e => updateSpendSelection(e.target.value);

  useEffect(() => {
    updateAdSelection({
      headlineSelect1: ad && ad[ 'headline-required' ],
      headlineSelect2: ad && ad[ 'headline-1' ],
      headlineSelect3: ad && ad[ 'headline-2' ],
      description1: ad && ad[ 'description-1' ],
      description2: ad && ad[ 'description-2' ],
    });
  }, [ad]);
  const handleAdHeadlineChange = e => {
    const name = e.target.name;
    updateAdSelection({
      ...adSelection,
      [ name ]: e.target.value,
    });
  };

  const classes = useStyles();
  return (
      <Modal open={createAdModalOpen} onClose={() => toggleAdModal(false)} className={classes.modalContainer}>
        <div className={classes.adModal}>
          <div className={classes.adTitle}>
            <h3 className={classes.headerAvatar}>
              <Avatar className={classes.greenAvatar}>4</Avatar> Approve your ad copy
            </h3>
          </div>
          <div className={classes.adForm}>
            <div className={classes.adFormSection}>
              <h4>HeadLines</h4>
              <TextField className={classes.adField} id="head1" label="1st Headline" variant="outlined"
                         value={adSelection.headlineSelect1} defaultValue={ad[ 'headline-required' ]}
                         name="headlineSelect1" onChange={handleAdHeadlineChange}/>
              <FormControl variant="outlined" className={classes.adField}>
                <InputLabel id="headlineSelectLabel2">2nd Headline</InputLabel>
                <Select
                    labelId="headlineSelectLabel2"
                    id="headlineSelect2"
                    name="headlineSelect2"
                    value={adSelection.headlineSelect2 || ad[ 'headline-1' ]}
                    onChange={handleAdHeadlineChange}
                    label="2nd Headline">
                  {
                    adHeadlinesArr.map(ad => <MenuItem value={ad} key={`${ad} - 1`}>{ad}</MenuItem>)
                  }
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.adField}>
                <InputLabel id="headlineSelectLabel3">3rd Headline</InputLabel>
                <Select
                    labelId="headlineSelectLabel3"
                    id="headlineSelect3"
                    name="headlineSelect3"
                    value={adSelection.headlineSelect3 || ad[ 'headline-2' ]}
                    onChange={handleAdHeadlineChange}
                    label="3rd Headline">
                  {
                    adHeadlinesArr.map(ad => <MenuItem value={ad} key={`${ad} - 2`}>{ad}</MenuItem>)
                  }
                </Select>
              </FormControl>
              <h4 className={classes.marginTop}>Describe your product and your store</h4>
              <TextField className={classes.adField} id="des1" label="Description 1" variant="outlined"
                         value={adSelection.description1} name="description1" onChange={handleAdHeadlineChange}/>
              <TextField className={classes.adField} id="sed2" label="Description 2" variant="outlined"
                         value={adSelection.description2} name="description2" onChange={handleAdHeadlineChange}/>
            </div>
            <div className={classes.adFormSection}>
              <h4>Keywords Selected</h4>
              <div className={classes.chipContainer}>
                {keywords.map(key => <Chip className={classes.adKeywordChip} key={key} label={key}/>)}
              </div>
              <h4>Daily Ad Spend</h4>
              <FormControl variant="outlined" className={classes.spendField}>
                <InputLabel id="adSpend">Daily Ad Spend</InputLabel>
                <Select
                    labelId="adSpend"
                    id="adSpend"
                    name="adSpend"
                    value={spend}
                    onChange={handleAdDailySpendChange}
                    label="Daily Ad Spend">
                  {
                    dailySpendArr.map(s => <MenuItem value={s} key={s}>$ {s}</MenuItem>)
                  }
                </Select>
              </FormControl>
              <h4>Example of the Ad</h4>
              <div className={classNames(classes.searchTermContainer)}>
                <h4>
                  <a className={classes.productLink} href={classes.url}>
                    {adSelection.headlineSelect1} | {adSelection.headlineSelect2} | {adSelection.headlineSelect3}
                  </a>
                </h4>
                <span className={classes.ad}>Ad</span>
                <a className={classes.companyLink} href={ad.url}>
                  {ad.url}
                </a>
                <div className={classes.snippet}>
                  <div>{adSelection.description1} {adSelection.description2}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.modalBtnGroup}>
            <Button variant="contained" disableElevation size="large" className={classes.modalNavBtn}
                    onClick={() => toggleAdModal(false)}>Reselect Key Words</Button>
            <Button variant="contained" disableElevation size="large" className={classes.modalNavBtn}
                    onClick={() => {
                      const postData = {
                        keywords,
                        spend,
                        headlines: [adSelection.headlineSelect1, adSelection.headlineSelect2, adSelection.headlineSelect3],
                        descriptions: [adSelection.description1, adSelection.description2],
                      };
                      updatePostData(postData)
                      toggleAdModal(false);
                      toggleEmailModal(true);
                    }}>Next</Button>
          </div>
        </div>
      </Modal>
  );
};
