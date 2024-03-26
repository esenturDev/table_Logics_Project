import { FC } from "react";
import scss from './Input.module.scss';
export const Input: FC<{
	type: string;
	onClick: () => void;
}> = ({type, onClick}) => {
	return <input className={scss.inputs} type={type} onClick={onClick}/>;
};
