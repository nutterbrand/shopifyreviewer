import React, {useState} from 'react';
import GridItem from '../Grid/GridItem';
import GridContainer from '../Grid/GridContainer';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LinearProgress from '@material-ui/core/LinearProgress';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../../assets/jss/nextjs-material-kit-pro/pages/productStyle';
import SearchHeader from '../../assets/img/searchHeader.svg';
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(productStyle);

export const EcommerceHeader = ({onSearch, onChange, loadingTable}) => {

  const classes = useStyles();
  const [inputValues, setInputValues] = useState({domain: '', productUrlValue: ''});
  const [productUrls, setUrls] = useState([]);
  const [productUrl, setProductUrl] = useState('');
  const [isLoading, updateLoading] = useState(false);

  const handleInputChange = e => {
    const {name, value} = e.target;
    onChange();
    setInputValues({...inputValues, [ name ]: value});
  };

  const handleUrlRequest = e => {
    e.preventDefault();
    updateLoading(true);
    const requestUrl = `https://evening-retreat-22032.herokuapp.com/urls/${inputValues.domain}`;
    fetch(requestUrl).then((response) => response.json()).then((data) => {
      setUrls(data.result.urls);
      updateLoading(false);
    });
  };

  const handleDomainSubmit = () => onSearch(inputValues);
  if (loadingTable) return null;
  return (
      <GridContainer className={classes.companyHeader}>
        <GridItem md={12} sm={12}>
          <div className={classes.headerForm}>
            <img className={classes.searchHeader} src={SearchHeader}/>
            <h2 className={classes.headerTitle}>
              Is your top ecommerce product being found on Google?
            </h2>
            <div className={classes.formTwo}>
              <h3 className={classes.headerAvatar}><Avatar className={classes.greenAvatar}>1</Avatar>
                Enter Your Shopify Domain
              </h3>
              <div>
                <TextField
                    className={classes.domainSearch}
                    id="domainName"
                    name="domain"
                    placeholder="Search Your Company Website"
                    variant="outlined"
                    size="small"
                    value={inputValues.domain}
                    onChange={handleInputChange}
                />
                {!!inputValues.domain && <Button className={classes.submit} onClick={handleUrlRequest}>Next</Button>}
              </div>

              <h3 className={classes.headerAvatar}>
                <Avatar className={classes.greenAvatar}>2</Avatar> Selected Your Product Page
              </h3>
              {
                isLoading ? <div><h3>Loading Product Urls</h3><LinearProgress/></div> :
                    <div className={classes.autoContainer}>
                      <Autocomplete
                          className={classes.productUrlAuto}
                          id="product-urls"
                          value={productUrl}
                          onChange={(e, productUrl) => setProductUrl(productUrl)}
                          inputValue={inputValues.productUrlValue}
                          onInputChange={(e, productUrl) => setInputValues(
                              {...inputValues, productUrlValue: productUrl})}
                          options={productUrls}
                          getOptionLabel={option => option}
                          renderInput={(params) => <TextField {...params} variant="outlined"/>}
                      />
                    </div>
              }
              {
                !!inputValues.productUrlValue &&
                <Button className={classes.autoSubmit} onClick={handleDomainSubmit}>Search</Button>
              }
            </div>
          </div>
        </GridItem>
      </GridContainer>
  );
};
