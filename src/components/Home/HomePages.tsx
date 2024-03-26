import { useEffect, useState } from "react";
import scss from "./HomePages.module.scss";
import { Input } from "../Ul/input/Input";

const array1 = [
	{
		id: 1,
		type: "checkbox",
		sumId: 1,
		sum: 8,
		textName: "Rossini",
		text2: "Frances",
		age: "36 Rossini Frances",
	},
	{
		id: 2,
		type: "checkbox",
		sumId: 1,
		sum: 1,
		textName: "Jon",
		text2: "Snow",
		age: "35 Jon Snow",
	},
	{
		id: 3,
		type: "checkbox",
		sumId: 1,
		sum: 3,
		textName: "Jaime",
		text2: "Lannister",
		age: "45 Jaime Lannister",
	},
	{
		id: 4,
		type: "checkbox",
		sumId: 1,
		sum: 9,
		textName: "Harvey",
		text2: "Roxie",
		age: "65 Harvey Roxie",
	},
	{
		id: 5,
		type: "checkbox",
		sumId: 1,
		sum: 7,
		textName: "Ferrara",
		text2: "Clifford",
		age: "44 Ferrara Clifford",
	},
];

const array2 = [
	{
		id: 1,
		type: "checkbox",
		sumId: 1,
		sum: 5,
		textName: "Daenerys",
		text2: "Targaryen",
		age: "Daenerys Targaryen",
	},
	{
		id: 2,
		type: "checkbox",
		sumId: 1,
		sum: 2,
		textName: "Cersei",
		text2: "Lannister",
		age: "42 Cersei Lannister",
	},
	{
		id: 3,
		type: "checkbox",
		sumId: 1,
		sum: 4,
		textName: "Arya",
		text2: "Stark",
		age: "16 Arya Stark",
	},
	{
		id: 4,
		type: "checkbox",
		sumId: 1,
		sum: 6,
		textName: "",
		text2: "Melisandre",
		age: "150 Melisandre",
	},
];
const HomePages = () => {
	const [isPageResult, setIsPageResult] = useState<boolean>(false);
	const [totalSumResult, setTotalSumResult] = useState<number | string>("");
	const [totalSumId, setTotalSumId] = useState<number | string>("");
	const [itemSum, setItemSum] = useState<number | string>("");
	const [itemSumName, setItemSumName] = useState<number | string>("");
	const [isOpenFalse, setIsOpenFalse] = useState<null | number>(null);

	const [onClickResult, setOnClickResult] = useState<null | number>(null);
	const [result, setResult] = useState(false);
	useEffect(() => {
		let totalSum = 0;
		let total = 0;
		array1.forEach((el) => {
			totalSum += +el.sum;
			setTotalSumResult(totalSum);
		});
		array1.forEach((elItemId) => {
			total += +elItemId.sumId;
			setTotalSumId(total);
		});
	}, [setTotalSumResult, setTotalSumId]);

	// function addItemIdInputResult (id: number) {
	// 	setOnClickResult(id)
	// }

	return (
		<div className={scss.home}>
			<div className="container">
				<div className={scss.content}>
					{isPageResult ? (
						<>
							<div className={scss.divTable}>
								<Input type="checkbox" 	onClick={() => {
										setResult(!result);
										console.log("result");
									}}/>
								<p>ID</p>
								<p>First name</p>
								<p>Age</p>
								<p>Full name</p>
							</div>
							<>
								{array2.map((item) => (
									<div style={
										result || onClickResult === item.id
											? { backgroundColor: "blue" }
											: { backgroundColor: "rgb(27, 24, 24)" }
									} className={scss.divTableMap1} key={item.id}>
											{isOpenFalse === item.id ? (
											<>
												<Input
													onClick={() => {
														// addItemIdInputResult(item.id);
														setOnClickResult(null);
														setItemSum("");
														setItemSumName("");
														setIsOpenFalse(null);
													}}
													type={item.type}
												/>
											</>
										) : (
											<>
												<Input
													onClick={() => {
														// addItemIdInputResult(item.id);
														setOnClickResult(item.id);
														setItemSum(item.sum);
														setItemSumName(item.sumId);
														setIsOpenFalse(item.id);
													}}
													type={item.type}
												/>
											</>
										)}
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
								<Input
									type="checkbox"
									onClick={() => {
										setResult(!result);
										console.log("result");
									}}
								/>
								<p>ID</p>
								<p>First name</p>
								<p>Age</p>
								<p>Full name</p>
							</div>
							<>
								{array1.map((item) => (
									<div
										style={
											result || onClickResult === item.id
												? { backgroundColor: "blue" }
												: { backgroundColor: "rgb(27, 24, 24)" }
										}
										className={scss.divTableMap1}
										key={item.id}>
										{isOpenFalse === item.id ? (
											<>
												<Input
													onClick={() => {
														// addItemIdInputResult(item.id);
														setOnClickResult(null);
														setItemSum("");
														setItemSumName("");
														setIsOpenFalse(null);
													}}
													type={item.type}
												/>
											</>
										) : (
											<>
												<Input
													onClick={() => {
														// addItemIdInputResult(item.id);
														setOnClickResult(item.id);
														setItemSum(item.sum);
														setItemSumName(item.sumId);
														setIsOpenFalse(item.id);
													}}
													type={item.type}
												/>
											</>
										)}
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
						{/* <p>{totalSumResult} row selected</p> */}
						{result ? (
							<>
								<p>{totalSumResult} row selected</p>
								<p>{totalSumId} row selected</p>
							</>
						) : null}
						<div onClick={() => setIsPageResult(false)}>button page 1</div>
						<div onClick={() => setIsPageResult(true)}>button page 2</div>
						{onClickResult ? (
							<>
								<p>{itemSum} row selected</p>
								<p>{itemSumName} row selected</p>
							</>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePages;
