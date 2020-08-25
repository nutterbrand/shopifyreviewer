import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../../assets/jss/nextjs-material-kit-pro/pages/productStyle';

const useStyles = makeStyles(productStyle);

export const SearchAgainModal = props => {
  const {
    searchAgainModalOpen,
    toggleSearchAgainModal,
    handleSearchAgainSubmit,
  } = props;

  const [keys, updateKeys] = useState({key1: '', key2: ''});
  const handleKeysChange = e => {
    const {name, value} = e.target;
    updateKeys({...keys, [ name ]: value});
  };

  const classes = useStyles();
  return (
      <Modal
          open={searchAgainModalOpen}
          onClose={() => toggleSearchAgainModal(false)}
          className={classes.modalContainer}
      >
        <div className={classes.searchAgainModal}>
          <h3 className={classes.headerAvatar}>
            <Avatar className={classes.greenAvatar}>!</Avatar> Enter Two Keywords and Search Again
          </h3>
          <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={() => handleSearchAgainSubmit(keys)}
          >
            <TextField
                className={classes.key}
                id="key1"
                name="key1"
                placeholder="Keyword 1"
                variant="outlined"
                value={keys.key1}
                size="small"
                onChange={handleKeysChange}
            />
            <TextField
                className={classes.key}
                id="key2"
                name="key2"
                placeholder="Keyword 2"
                variant="outlined"
                value={keys.key2}
                size="small"
                onChange={handleKeysChange}
            />
            <Button className={classes.submitEmail} type="submit">
              Search Again
            </Button>
          </form>
        </div>
      </Modal>
  );
};
