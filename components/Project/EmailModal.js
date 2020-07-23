import Modal from "@material-ui/core/Modal";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import productStyle from "../../assets/jss/nextjs-material-kit-pro/pages/productStyle";

const BASE_URL = "https://evening-retreat-22032.herokuapp.com/";
const useStyles = makeStyles(productStyle);

export const EmailModal = (props) => {
  const {
    postData,
    emailModalOpen,
    toggleEmailModal,
    domain,
    url,
    reset,
  } = props;

  const [email, updateEmail] = useState("");
  const handleInputChange = (e) => updateEmail(e.target.value);
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const requestUrl = `${BASE_URL}url-keyword-post`;

    axios
      .post(
        requestUrl,
        { data: { ...postData, domain, url, email } },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        updateEmail("Success! Now download Keyword Genius.");
        // toggleEmailModal(false);
        // reset();
      });
  };

  const classes = useStyles();
  return (
    <Modal
      open={emailModalOpen}
      onClose={() => toggleEmailModal(false)}
      className={classes.modalContainer}
    >
      <div className={classes.emailModal}>
        <h3 className={classes.headerAvatar}>
          <Avatar className={classes.greenAvatar}>5</Avatar> What is your email?
          <span style={{ fontSize: "17px", paddingLeft: "5px" }}>
            (Our team will help you with the new campaign)
          </span>
        </h3>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={handleEmailSubmit}
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
          <Button className={classes.submitEmail} type="submit">
            Submit Email
          </Button>
        </form>
        <h3 className={classes.headerAvatar}>
          <Avatar className={classes.greenAvatar}>6</Avatar> Download Keyword
          Genius to launch your campaign
        </h3>
        <div className={classes.downloadDesContainer}>
          Download & Connect Keyword Genius and we'll launch your first campaign
          for free!
        </div>
        <Button
          className={classes.downloadLinkBtn}
          size="large"
          target="_blank"
          href="https://apps.shopify.com/keyword-genius"
        >
          Download
        </Button>
      </div>
    </Modal>
  );
};
