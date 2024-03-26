import { FC } from "react";
import scss from './Input.module.scss';
export const Input: FC<{
	type: string;
	
}> = ({type}) => {
	return <input className={scss.inputs} type={type} />;
};
