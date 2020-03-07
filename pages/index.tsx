import { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import problems from "./problems.json";
import { MenuItem, FormControl, Select, InputLabel, Button, Container, Typography, Grid, AppBar, Toolbar, IconButton, Paper, Box, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	appBar: {
		top: "auto",
		bottom: 0
	},
	grow: {
		flexGrow: 1
	},
	paper: {
		height: "80%",
		marginTop: 20,
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
}));

const Index = () => {
	const classes = useStyles();
	const [difficulty, setDifficulty] = useState(1);
	const [question, setQuestion] = useState<any>(null);
	const handleChange = event => {
		setDifficulty(event.target.value);
	};
	const handlePickOne = () => {
		const filteredProblem = problems.stat_status_pairs.filter(status => !status.paid_only && status.difficulty.level === difficulty);
		const questionIndex = Math.floor(Math.random() * filteredProblem.length);
		setQuestion(filteredProblem[questionIndex]);
	};
	return (
		<div style={{ height: "100vh", display: "flex" }}>
			<AppBar>
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Leetcode Random Question
					</Typography>
				</Toolbar>
			</AppBar>
			<Box display="flex" flex={1} justifyContent="center" alignItems="center" style={{ background: "#eee" }}>
				<Paper square className={classes.paper}>
					<Box display="flex" flex={1} justifyContent="center" alignItems="center" flexDirection="column">
						{question && (
							<>
								<Typography>
									<Link href={`https://leetcode.com/problems/${question.stat.question__title_slug}`} target="_blank" rel="noreferrer">{`${question.stat.question__title}`}</Link>
								</Typography>
							</>
						)}
						<Box marginTop={10}>
							<FormControl className={classes.formControl}>
								<InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
								<Select labelId="demo-simple-select-label" id="demo-simple-select" value={difficulty} onChange={handleChange}>
									<MenuItem value={1}>Easy</MenuItem>
									<MenuItem value={2}>Medium</MenuItem>
									<MenuItem value={3}>Hard</MenuItem>
								</Select>
							</FormControl>
							<Button variant="outlined" onClick={handlePickOne}>
								Pick one
							</Button>
						</Box>
					</Box>
				</Paper>
			</Box>
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar>
					<div className={classes.grow} />
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Index;
