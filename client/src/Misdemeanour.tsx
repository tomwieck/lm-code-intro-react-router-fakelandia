import { useEffect, useState } from "react";
import axios from 'axios';

export const Misdemeanour : React.FC = () => {

  const [misdemeanours, setMisdemeanours] = useState<Array<any>>([

  ]);

  useEffect(() => {
	  getMisdemeanours(20);
  }, []);

  const getMisdemeanours = async (number : number) => {
	// Utilised Axios for API calls
	const apiResponse = await axios.get(`http://localhost:8080/api/misdemeanours/${number}`);
	setMisdemeanours(apiResponse.data);
	console.log(misdemeanours);
  };
    return (
        <>Misdemeanour!</>
    )
}