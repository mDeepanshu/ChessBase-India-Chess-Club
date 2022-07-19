import { Grid, Paper, TextField, Button } from "@mui/material";
import { useState } from "react";
import "./login.css";
import { login, signUp } from "../HttpRequests";

const Login = () => {
	const [cred, setCred] = useState({ username: "", password: "" });

	function submit(event) {
		event.preventDefault();
		login(cred);
	}

	function handleInputChange(event) {
		const name = event.target.name;
		setCred((prevState) => {
			return { ...prevState, [name]: event.target.value };
		});
		console.log(cred);
	}

	return (
		<>
			<Paper elevation={3} className="Paper">
				<form onSubmit={submit}>
					<Grid container spacing={2} className="GridOne">
						<Grid item>
							<TextField
								id="username"
								label="User Name"
								name="username"
								value={cred.username}
								onChange={handleInputChange}
								variant="outlined"
							/>
						</Grid>
						<Grid item>
							<TextField
								id="password"
								label="Password"
								name="password"
								value={cred.password}
								onChange={handleInputChange}
								variant="outlined"
							/>
						</Grid>
						<Grid item>
							<Button type="submit" variant="contained">
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</>
	);
};

export default Login;
