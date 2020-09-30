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

  const [key, updateKey] = useState('');
  const handleKeysChange = e => updateKey(e.target.value)

  const classes = useStyles();
  return (
      <Modal
          open={searchAgainModalOpen}
          onClose={() => toggleSearchAgainModal(false)}
          className={classes.modalContainer}
      >
        <div className={classes.searchAgainModal}>
          <h3 className={classes.headerAvatar}>
            <Avatar className={classes.greenAvatar}>!</Avatar> Enter a Keyword and Search Again
          </h3>
          <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={() => handleSearchAgainSubmit(key)}
          >
            <TextField
                className={classes.key}
                id="key"
                name="key"
                placeholder="Keyword"
                variant="outlined"
                value={key}
                size="small"
                onChange={handleKeysChange}
            />
            <Button className={classes.submitEmail} type="submit" disabled={!key}>
              Search Again
            </Button>
          </form>
        </div>
      </Modal>
  );
};
