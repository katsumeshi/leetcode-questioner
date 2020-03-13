import { useState } from "react";
import Head from "next/head";
import leetcode from "./leetcode.png";
import twitter from "./twitter.svg";
import problems from "./problems.json";

const difficulty = ["Any", "Easy", "Medium", "Hard"];
const getTitle = question => (question ? question.stat.question__title : "");
const getQuestionUrl = question => (question ? `https://leetcode.com/problems/${question.stat.question__title_slug}` : "");

const Header = () => (
	<div className="Header">
		<div className="Header-item">
			<a href="#" className="Header-link f4 d-flex flex-items-center">
				<img style={{ width: 32, height: 32, marginRight: 16 }} src={leetcode} alt="leetcode" />
				<span>Leetcode Random Question</span>
			</a>
		</div>
	</div>
);

const Footer = ({ question }) => (
	<div className="Header position-absolute bottom-0" style={{ left: 0, right: 0, display: "flex", flex: 1, justifyContent: "flex-end" }}>
		<a
			target="_blank"
			rel="noreferrer"
			className="btn btn-sm"
			style={{ background: "#1DA1F2" }}
			href={`https://twitter.com/intent/tweet?text=%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89${getTitle(question)}%28${getQuestionUrl(
				question
			)}%29%E3%82%92%E8%A7%A3%E3%81%8F%E3%82%88%EF%BC%81%EF%BC%81`}
			role="button"
		>
			<img style={{ width: 24, height: 24, marginTop: -12, marginLeft: -8, marginBottom: -8 }} src={twitter} alt="twitter" />
			<span style={{ color: "white" }}>Tweet</span>
		</a>
	</div>
);

const Content = ({ question, level, handleSelectLevel, handlePickOne }) => (
	<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
		<div className="Box Box--spacious col-6 mx-auto text-center d-flex" style={{ height: 300, width: 500 }}>
			<div className="Box-body d-flex flex-1 flex-column flex-justify-between" style={{ height: 300 }}>
				<div />
				<h3 className="f1-light">{question ? <a href={getQuestionUrl(question)} target="_blank" rel="noreferrer">{`${getTitle(question)}`}</a> : <div>Leet code question</div>}</h3>
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
	console.log(question);
	return (
		<>
			<Head>
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Primer/14.2.0/primer.min.css" />
			</Head>
			<Header />
			<Content level={level} question={question} handleSelectLevel={handleSelectLevel} handlePickOne={handlePickOne} />
			<Footer question={question} />
		</>
	);
};

export default Index;
