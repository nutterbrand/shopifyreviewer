import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(productStyle);

export const Header = (props) => {
  const [values, setValues] = useState({domain: '', email: ''});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({...values, [ name ]: value});
  };
  const handleDomainSubmit = (event) => {
    //TODO: Make Call to BE API To get data
    setValues({...values, domain: ''});
    event.preventDefault();
  };
  const handleEmailSubmit = (event) => {
    //TODO: Make Call to BE API to submit email
    setValues({...values, email: ''});
    event.preventDefault();
  };
  const classes = useStyles();

  return (
      <>
        <div className={classes.header}>
          <h4>Shopify Reviewer</h4>
          <form className={classes.form} noValidate autoComplete="off" onSubmit={handleDomainSubmit}>
            <TextField className={classes.domain} id="domainName" name='domain' placeholder='Enter Your Company Website'
                       variant="outlined" size="small" value={values.domain} onChange={handleInputChange}/>
            <Button className={classes.submit} type="submit">SUBMIT</Button>
          </form>
          <Button variant="contained" className={classes.signUp} onClick={handleOpen}>Sign Up</Button>
        </div>
        <Modal open={open} onClose={handleClose} className={classes.modalContainer}>
          <div className={classes.modal}>
            <h5>Please enter your email for our team to contact you</h5>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={handleEmailSubmit}>
              <TextField className={classes.domain} id="email" name='email' placeholder='Enter Your Email'
                         variant="outlined" size="small" value={values.email} onChange={handleInputChange}/>
              <Button className={classes.submit} type="submit">SUBMIT</Button>
            </form>
          </div>
        </Modal>
      </>
  );
};