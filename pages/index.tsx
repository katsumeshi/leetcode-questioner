import { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import problems from "./problems.json";
import { MenuItem, FormControl, Select, InputLabel, Button, Container, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
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
		const filteredProblem = problems.stat_status_pairs.filter(status => status.difficulty.level === difficulty);
		const questionIndex = Math.floor(Math.random() * filteredProblem.length);
		setQuestion(filteredProblem[questionIndex]);
	};
	return (
		<Container>
			<Grid container spacing={3}>
				<Grid container item xs={12} justify="center">
					<p>Let's Play Leet Code</p>
				</Grid>
				<Grid container item xs={12} justify="center">
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
				</Grid>
				<Grid container item xs={12} justify="center">
					<div>
						{question && (
							<>
								<a href={`https://leetcode.com/problems/${question.stat.question__title_slug}`}>{`${question.stat.question__title}`}</a>
								<p>{`${question.difficulty.level}`}</p>
							</>
						)}
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Index;
