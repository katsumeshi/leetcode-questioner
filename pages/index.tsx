import { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import problems from "./problems.json";
import { MenuItem, FormControl, Select, InputLabel, Button } from "@material-ui/core";

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
	const [quetion, setQuestion] = useState<any>(null);
	const handleChange = event => {
		setDifficulty(event.target.value);
	};
	const handlePickOne = () => {
		const filteredProblem = problems.stat_status_pairs.filter(status => status.difficulty.level === difficulty);
		const questionIndex = Math.floor(Math.random() * filteredProblem.length);
		setQuestion(filteredProblem[questionIndex]);
	};
	return (
		<>
			<p>Let's Play Leet Code</p>
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
			<div>
				{quetion && (
					<>
						<a href={`https://leetcode.com/problems/${quetion.stat.question__title_slug}`}>{`${quetion.stat.question__title}`}</a>
						<p>{`${quetion.difficulty.level}`}</p>
					</>
				)}
			</div>
			<button className="mdc-button mdc-button--outlined">
				<span className="mdc-button__ripple"></span> Learn More
			</button>
		</>
	);
};

export default Index;
