import { useState, useEffect, useRef } from "react";
import Head from 'next/head'
import problems from "./problems.json";
import { Dropdown } from "@primer/components";

// const useStyles = makeStyles(theme => ({
// 	formControl: {
// 		margin: theme.spacing(1),
// 		minWidth: 120
// 	},
// 	selectEmpty: {
// 		marginTop: theme.spacing(2)
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2)
// 	},
// 	title: {
// 		flexGrow: 1
// 	},
// 	appBar: {
// 		top: "auto",
// 		bottom: 0
// 	},
// 	grow: {
// 		flexGrow: 1
// 	},
// 	paper: {
// 		height: "80%",
// 		marginTop: 20,
// 		display: "flex",
// 		flex: 1,
// 		justifyContent: "center",
// 		alignItems: "center"
// 	}
// }));

const Index = () => {
	// const classes = useStyles();
	const [difficulty, setDifficulty] = useState(1);
	const [question, setQuestion] = useState<any>(null);
	const [open, setOpen] = useState(false);
	const handleChange = event => {
		console.warn(event.target)
		setDifficulty(event.target.value);
	};
	const handlePickOne = () => {
		const filteredProblem = problems.stat_status_pairs.filter(status => !status.paid_only && status.difficulty.level === difficulty);
		const questionIndex = Math.floor(Math.random() * filteredProblem.length);
		setQuestion(filteredProblem[questionIndex]);
	};
	return (
		<>
			<Head>
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Primer/14.2.0/primer.min.css" />
			</Head>
			<div className="Header">
				<div className="Header-item">
					<a href="#" className="Header-link f4 d-flex flex-items-center">
						<svg height="32" className="octicon octicon-mark-github mr-2" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
						<span>Leetcode Random Question</span>
					</a>
				</div>
				<div className="Header-item">
					<input type="search" className="form-control input-dark" />
				</div>
				<div className="Header-item Header-item--full">
					Menu
					</div>
				<div className="Header-item mr-0">
					<img className="avatar" height="20" alt="@octocat" src="https://github.com/octocat.png" width="20" />
				</div>
			</div>

			<div className="Header position-absolute bottom-0" style={{ left: 0, right: 0 }} >
				<div className="Header-item">
					<a href="#" className="Header-link f4 d-flex flex-items-center">
						<svg height="32" className="octicon octicon-mark-github mr-2" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>

					</a>
				</div>
			</div>

			<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<div className="Box Box--spacious col-6 mx-auto text-center" style={{ height: 300 }} >
					<form>
						<div className="Box-body" style={{ height: 300, }} >
							<h3 className="f1-light" style={{ height: 150, }} >
								{question && (
									<>
										<a href={`https://leetcode.com/problems/${question.stat.question__title_slug}`} target="_blank" rel="noreferrer">{`${question.stat.question__title}`}</a>
									</>
								)}
							</h3>
							<div style={{ marginBottom: 16, marginTop: 16 }}>
								<details className="dropdown details-reset details-overlay d-inline-block"  >
									<summary className="btn" aria-haspopup="true">
										Dropdown
      								<div className="dropdown-caret"></div>
									</summary>

									<ul className="dropdown-menu dropdown-menu-se" onClick={handleChange}>
										<li><a className="dropdown-item" href="#url">Any</a></li>
										<li><a className="dropdown-item" href="#url">Easy</a></li>
										<li><a className="dropdown-item" href="#url">Medium</a></li>
										<li><a className="dropdown-item" href="#url">Hard</a></li>
									</ul>
								</details>
							</div>
							<button className="btn btn-primary btn-block" onClick={handlePickOne}>Pick one</button>
						</div>
					</form>
				</div>
			</div>

			{/* <button className="btn btn-block mb-2" type="button">Pick one</button> */}
			{/* <AppBar>
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
								<InputLabel id="demo-simple-select-label">Difficulty</InputLabel>*/
			/*</FormControl>
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
			</AppBar> */}
		</>
	);
};

export default Index;
