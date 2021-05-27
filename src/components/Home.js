import { useHistory } from "react-router-dom";

function Home() {
	let history = useHistory();
	return (
		<div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
			<h1>Contact Manager App</h1>
			<div>
				<button
					onClick={() => {
						history.push("/addContacts");
					}}
				>
					ADD Contacts
				</button>
				<button
					onClick={() => {
						history.push("/contactList");
					}}
				>
					Contact List
				</button>
			</div>
		</div>
	);
}

export default Home;
