import {
	ListItem,
	ListItemAvatar,
	Avatar,
	Typography,
	makeStyles,
	Snackbar,
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
// import DeleteRoundedIcon from "@material-ui/icons";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { Box } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
	contactList: {
		borderBottom: "5px solid rgb(0,0,255,0.5)",
		width: "500px",
		margin: "20px 10px 0px",
	},
	details: {
		display: "flex",
		flexDirection: "column",
		margin: "0 20px 0 40px",
	},
	name: {
		margin: "5px",
		fontSize: "20px",
		fontStretch: "ultra-expanded",
		fontWeight: "bold",
	},
	otherDetails: {
		fontSize: "20px",
		fontStretch: "ultra-expanded",
	},
	avatar: {
		padding: "7px",
	},
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
}

const ContactCard = (props) => {
	const history = useHistory();
	const classes = useStyles();
	// console.log(props);
	const { _id, name, phoneNo, email } = props.contact;
	return (
		<Box className={classes.contactList}>
			<ListItem className={classes.root}>
				<ListItemAvatar className={classes.avatar}>
					<Avatar alt={name} />
				</ListItemAvatar>
				<Box className={classes.details}>
					<Typography className={classes.name}>{name}</Typography>
					<Typography
						className={classes.otherDetails}
					>{`E-mail: ${email}`}</Typography>
					<Typography
						className={classes.otherDetails}
					>{`Phone no: ${phoneNo}`}</Typography>
				</Box>
				<Box
					style={{
						display: "flex",
						alignSelf: "flex-end",
						alignItems: "center",
						justifyContent: "center",
						margin: "0 0 0 50px",
					}}
				>
					<EditRoundedIcon style={{ color: "green", fontSize: "30", cursor: "pointer" , margin:"7px"}} onClick = {()=>{
						console.log("Update");
						console.log(_id);
						history.push({
							pathname: '/updateContact',
							state: { id: _id }
					});
					// 	axios.update(`http://localhost:5000/contactList/update`, { data: { id: _id}}).then((respoanse)=>{
					// 		console.log(respoanse);
					// 		history.push('/contactList/update');
					// 		history.push('/contactList');
					// 	}).catch((err)=>{
					// 		console.log(err);
					// 	});
					}}/>
					<DeleteRoundedIcon style={{ color: "red", fontSize: "35", cursor: "pointer", margin:"7px"}} onClick = {()=>{
						console.log("Deleted");
						console.log(_id);
						axios.delete(`http://localhost:5000/contactList/delete`, { data: { id: _id}, param: { id: _id}}).then((respoanse)=>{
							console.log(respoanse);
							history.push('/contactList/delete');
							history.push('/contactList');
						}).catch((err)=>{
							console.log(err);
						});
					}} />
				</Box>
			</ListItem>
			<Snackbar open={CustomizedSnackbars.open} autoHideDuration={6000} onClose={CustomizedSnackbars.handleClose}>
  <Alert onClose={CustomizedSnackbars.handleClose} severity="success">
    This is a success message!
  </Alert>
</Snackbar>
		</Box>
	);
};

export default ContactCard;
