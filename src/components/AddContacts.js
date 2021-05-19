import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	areaField: {
		display: "flex",
		flexDirection: "column",
	},
	label: {
		fontWeight: "bold",
		marginTop: "10px",
	},
	inputText: {
		margin: "10px 0px",
		minWidth: "50ch",
	},
  button:{
    fontWeight: 'bold',
    padding: '7px 20px'
  }
});

function AddContacts() {
	const classes = useStyles();
  let [name, setName] = useState("");
  let [phone, setphone] = useState("");
  let [email, setEmail] = useState("");

  function submitForm(){

  }

	return (
		<form noValidate autoComplete="off">
			<Box className={classes.areaField}>
				<Box className={classes.label}>Name :</Box>
				<TextField className={classes.inputText} value={name} onChange={setName(event.target.value)} variant="outlined" />
			</Box>
			<Box className={classes.areaField}>
				<Box className={classes.label}>Phone no :</Box>
				<TextField className={classes.inputText} variant="outlined" />
			</Box>
			<Box className={classes.areaField}>
				<Box className={classes.label}>E-mail :</Box>
				<TextField className={classes.inputText} variant="outlined" />
			</Box>
			<Button variant="contained" color="primary" className={classes.button}>
        Add Contact
			</Button>
		</form>
	);
}

export default AddContacts;
