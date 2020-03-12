import { useState } from "react";
import Head from "next/head";
import { Dropdown } from "@primer/components";
import leetcode from "./leetcode.png";
import problems from "./problems.json";

const difficulty = ["Any", "Easy", "Medium", "Hard"];

const Header = () => (
	<div className="Header">
		<div className="Header-item">
			<a href="#" className="Header-link f4 d-flex flex-items-center">
				<img style={{ width: 32, height: 32 }} src={leetcode} alt="leetcode" />
				<span>Leetcode Random Question</span>
			</a>
		</div>
	</div>
);

const Footer = () => (
	<div className="Header position-absolute bottom-0" style={{ left: 0, right: 0 }}>
		<div className="Header-item">
			<a href="#" className="Header-link f4 d-flex flex-items-center">
				<svg height="32" className="octicon octicon-mark-github mr-2" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
					></path>
				</svg>
			</a>
		</div>
	</div>
);

const Content = ({ question, level, handleSelectLevel, handlePickOne }) => (
	<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
		<div className="Box Box--spacious col-6 mx-auto text-center d-flex" style={{ height: 300, width: 500 }}>
			<div className="Box-body d-flex flex-1 flex-column flex-justify-between" style={{ height: 300 }}>
				<div />
				<h3 className="f1-light">
					{question ? (
						<a href={`https://leetcode.com/problems/${question.stat.question__title_slug}`} target="_blank" rel="noreferrer">{`${question.stat.question__title}`}</a>
					) : (
						<div>Leet code question</div>
					)}
				</h3>
				<div className="d-flex">
					<div style={{ marginRight: 16 }}>
						<details className="dropdown details-reset details-overlay d-inline-block">
							<summary className="btn" aria-haspopup="true" style={{ width: 80 }}>
								{`${difficulty[level]}`}
								<div className="dropdown-caret"></div>
							</summary>
							<ul className="dropdown-menu dropdown-menu-se">
								{difficulty.map((value, index) => (
									<li key={value} onClick={() => handleSelectLevel(index)}>
										<a className="dropdown-item" href="#url">{`${value}`}</a>
									</li>
								))}
							</ul>
						</details>
					</div>
					<button className="btn btn-primary btn-block" style={{ height: 34 }} onClick={handlePickOne}>
						Pick one
					</button>
				</div>
			</div>
		</div>
	</div>
);

const Index = () => {
	const [level, setLevel] = useState(0);
	const [question, setQuestion] = useState<any>(null);
	const handlePickOne = () => {
		const filteredProblem = problems.stat_status_pairs.filter(status => !status.paid_only && (level === 0 || status.difficulty.level === level));
		const questionIndex = Math.floor(Math.random() * filteredProblem.length);
		setQuestion(filteredProblem[questionIndex]);
	};
	const handleSelectLevel = index => {
		setLevel(index);
	};
	return (
		<>
			<Head>
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Primer/14.2.0/primer.min.css" />
			</Head>
			<Header />
			<Content level={level} question={question} handleSelectLevel={handleSelectLevel} handlePickOne={handlePickOne} />
			<Footer />
		</>
	);
};

export default Index;
