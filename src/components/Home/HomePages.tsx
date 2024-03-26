import { useEffect, useState } from "react";
import scss from "./HomePages.module.scss";
import { Input } from "../Ul/input/Input";

const array1 = [
	{
		id: 1,
		type: "checkbox",
		sumId: 1,
		sum: 6,
		textName: "Melisandre",
		text2: "Stark",
		age: "150 Melisandre",
	},
	{
		id: 2,
		type: "checkbox",
		sumId: 1,
		sum: 4,
		textName: "Arya",
		text2: "Stark",
		age: "16  Arya Stark",
	},
	{
		id: 3,
		type: "checkbox",
		sumId: 1,
		sum: 2,
		textName: "Cersei",
		text2: "Lannister",
		age: "42  Cersei Lannister",
	},
];
const HomePages = () => {
	const [isPageResult, setIsPageResult] = useState<boolean>(false);
	const [totalSumResult, setTotalSumResult] = useState<string>("");
	useEffect(() => {
		let totalSum = "0";
		array1.forEach((el) => {
			totalSum += +el.sum;
			setTotalSumResult(totalSum);
		});
	}, [setTotalSumResult]);
	return (
		<div className={scss.home}>
			<div className="container">
				<div className={scss.content}>
					{isPageResult ? (
						<>
							<div className={scss.divTable}>
								<h1>Hello</h1>
								<Input type="checkbox" />
								<p>ID</p>
								<p>First name</p>
								<p>Age</p>
								<p>Full name</p>
							</div>
							<>
								{array1.map((item) => (
									<div className={scss.divTableMap1} key={item.id}>
										<Input type={item.type} />
										<span>{item.sum}</span>
										<p>{item.textName}</p>
										<p>{item.text2}</p>
										<p>{item.age}</p>
									</div>
								))}
							</>
						</>
					) : (
						<>
							<div className={scss.divTable}>
								<Input type="checkbox" />
								<p>ID</p>
								<p>First name</p>
								<p>Age</p>
								<p>Full name</p>
							</div>
							<>
								{array1.map((item) => (
									<div className={scss.divTableMap1} key={item.id}>
										<Input type={item.type} />
										<span>{item.sum}</span>
										<p>{item.textName}</p>
										<p>{item.text2}</p>
										<p>{item.age}</p>
									</div>
								))}
							</>
						</>
					)}
					<div>
						<p>{totalSumResult} row selected</p>
						<div onClick={() => setIsPageResult(false)}>button page 1</div>
						<div onClick={() => setIsPageResult(true)}>button page 2</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePages;
