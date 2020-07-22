import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {HeaderShopify} from '../components/Project/HeaderShopify';
import {EcommerceHeader} from '../components/Project/EcommerceHeader';
import {LoadingSpinner} from '../components/Project/LoadingSpinner';
import {ProductKeyWordsTable} from '../components/Project/ProductKeyWordsTable';

import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import Download1 from '../assets/img/download_1.svg';
import Download2 from '../assets/img/download_1.svg';
import Download3 from '../assets/img/download_1.svg';
import classNames from 'classnames';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Icon from '@material-ui/core/Icon';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(productStyle);

const LOADING_IMAGES = [Download1, Download2, Download3];
const LOADING_MESSAGES = [
  'Downloading Shopify Product Page...',
  'Analyzing Competitors...',
  'Building Landing Page...',
];
const BASE_URL = 'https://evening-retreat-22032.herokuapp.com/';
export default function HomePage() {
  const classes = useStyles();
  const [data, setData] = useState();
  const [ad, setAd] = useState();
  const [productURL, updateProductURL] = useState();
  const [createAdModalOpen, toggleAdModal] = useState(false);
  const [emailModalOpen, toggleEmailModal] = useState(false);
  const [email, updateEmail] = useState('');
  const [keywords, updateKeywords] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const handleOnSearch = values => {
    const {domain, productUrlValue} = values;
    updateProductURL(productUrlValue);
    const filteredDomain = domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[ 0 ];
    setLoading(true);
    setData(null);
    const makeRequest = () => {
      const requestUrl = `${BASE_URL}url-keyword/${filteredDomain}/${productUrlValue}`;
      fetch(requestUrl).then((response) => response.json()).then((data) => {
        console.log(data);
        setData(data);
        setAd(data.result[ 0 ]);
        setLoading(false);
      });
    };
    makeRequest();
  };
  const handleInputChange = e => updateEmail(e.target.value);
  const handleOnChange = () => setData(null);
  const handleCreateAd = selected => {
    console.log(selected);
    updateKeywords(selected);
    toggleAdModal(true);
  };
  const adHeadlinesArr = ad ? [
    ad[ 'headline-1' ],
    ad[ 'headline-2' ],
    ad[ 'headline-3' ],
    ad[ 'headline-4' ],
    ad[ 'headline-5' ],
    ad[ 'headline-6' ]] : [];
  const [adSelection, updateAdSelection] = useState({headlineSelect2: '', headlineSelect3: ''});
  useEffect(() => {
    updateAdSelection({headlineSelect2: ad && ad[ 'headline-1' ], headlineSelect3: ad && ad[ 'headline-2' ]});
  }, [ad]);
  const handleAdHeadlineChange = e => {
    const name = e.target.name;
    updateAdSelection({
      ...adSelection,
      [ name ]: e.target.value,
    });
  };
  return (
      <>
        {isLoading && <LoadingSpinner loadingImages={LOADING_IMAGES} loadingMessages={LOADING_MESSAGES}/>}
        <HeaderShopify/>
        <div className={classes.companyPage}>
          <div className={classes.section}>
            <div className={classes.container}>
              <EcommerceHeader onSearch={handleOnSearch} onChange={handleOnChange} loadingTable={isLoading}/>
              {!!data && <div className={classes.keywordCard}>
                <h3 className={classes.headerAvatar}>
                  <Avatar className={classes.greenAvatar}>3</Avatar> Pick the 5 best keywords to add your site.
                </h3>
                <ProductKeyWordsTable rows={data.result} productURL={productURL} createAd={handleCreateAd}/>
              </div>}
            </div>
          </div>
        </div>
        {ad && <Modal open={createAdModalOpen} onClose={() => toggleAdModal(false)} className={classes.modalContainer}>
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
                           value={ad[ 'headline-required' ]} defaultValue={ad[ 'headline-required' ]}/>
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
                           value={ad[ 'description-1' ]} defaultValue={ad[ 'description-1' ]}/>
                <TextField className={classes.adField} id="sed2" label="Description 2" variant="outlined"
                           value={ad[ 'description-2' ]} defaultValue={ad[ 'description-2' ]}/>
              </div>
              <div className={classes.adFormSection}>
                <h4>Keywords Selected</h4>
                <div>
                  {keywords.map(key => <Chip className={classes.adKeywordChip} key={key} label={key}/>)}
                </div>
                <h4>Example of the Ad</h4>
                <div className={classNames(classes.searchTermContainer)}>
                  <h4>
                    <a className={classes.productLink} href={classes.url}>
                      {ad[ 'headline-required' ]} | {adSelection.headlineSelect2} | {adSelection.headlineSelect3}
                    </a>
                  </h4>
                  <span className={classes.ad}>Ad</span>
                  <a className={classes.companyLink} href={ad.url}>
                    {ad.url}
                  </a>
                  <div className={classes.snippet}>
                    <div>{ad[ 'description-1' ]} {ad[ 'description-2' ]}</div>
                  </div>
                </div>
                <div className={classNames(classes.exDesContainer)}>
                  We've started your ad. Please modify the description to convey the value of your product.
                  <Icon className={classes.phoneIcon}>phone</Icon> Chat with us
                </div>
              </div>
            </div>
            <div className={classes.modalBtnGroup}>
              <Button variant="contained" disableElevation size="large" className={classes.modalNavBtn}
                      onClick={() => toggleAdModal(false)}>Reselect Key Words</Button>
              <Button variant="contained" disableElevation size="large" className={classes.modalNavBtn}
                      onClick={() => {
                        toggleAdModal(false);
                        toggleEmailModal(true);
                      }}>Next</Button>
            </div>
          </div>
        </Modal>}
        <Modal open={emailModalOpen} onClose={() => toggleEmailModal(false)} className={classes.modalContainer}>
          <div className={classes.emailModal}>
            <h3 className={classes.headerAvatar}>
              <Avatar className={classes.greenAvatar}>5</Avatar> Please submit your email
            </h3>
            <form
                className={classes.form}
                noValidate
                autoComplete="off"
                onSubmit={() => {}}
            >
              <TextField
                  className={classes.email}
                  id="email"
                  name="email"
                  placeholder="Enter Your Email here"
                  variant="outlined"
                  value={email}
                  size="small"
                  onChange={handleInputChange}
              />
              <Button className={classes.submitEmail} type="submit" onClick={() => toggleEmailModal(false)}>
                Submit Email
              </Button>
            </form>
            <h3 className={classes.headerAvatar}>
              <Avatar className={classes.greenAvatar}>6</Avatar> Download Keyword Genius to launch the campaign
            </h3>
            <div className={classes.downloadDesContainer}>Final step in order to launch this campaign is to connect KG to your
              Google Ads account. Once you
              connect Keyword Genius, this campaign will be launched! Feel free to launch a site wide campaign in the
              app as well
            </div>
            <Button className={classes.downloadLinkBtn} size='large' target="_blank"
                    href="https://apps.shopify.com/keyword-genius">Download</Button>
          </div>
        </Modal>
      </>
  );
}
