import { useEffect, useState } from "react";
import axios from 'axios';

export const Misdemeanour : React.FC = () => {

  const [misdemeanours, setMisdemeanours] = useState<Array<any>>([
    {
      "citizenId": 8880,
      "misdemeanour": "vegetables",
      "date": "26/02/2023"
    },
    {
      "citizenId": 813,
      "misdemeanour": "rudeness",
      "date": "26/02/2023"
    },
    {
      "citizenId": 5092,
      "misdemeanour": "vegetables",
      "date": "26/02/2023"
    },
    {
      "citizenId": 6301,
      "misdemeanour": "rudeness",
      "date": "26/02/2023"
    },
    {
      "citizenId": 5986,
      "misdemeanour": "united",
      "date": "26/02/2023"
    }
  ]);

  const getEmoji = (misdemeanour: String) => {
    if(misdemeanour === 'united') {
      return '😈'
    }
    if(misdemeanour === 'vegetables') {
      return '🥗'
    }
    if(misdemeanour === 'lift') {
      return '🗣'
    }
    if(misdemeanour === 'rudeness') {
      return '🤪'
    }
}

  // useContext

  useEffect(() => {
	  getMisdemeanours(5);
  }, []);

  const getMisdemeanours = async (number : number) => {
    // Utilised Axios for API calls
    const apiResponse = await axios.get(`http://localhost:8080/api/misdemeanours/${number}`);
    // setMisdemeanours(apiResponse.data.misdemeanours);
    console.log(misdemeanours);
  };

  const buildRows = () => {

		// we'll need arrays to store the rows and cols in, and they will be of type JSX.Element
		let rows : Array<JSX.Element> = [], cols : Array<JSX.Element> = [];

		misdemeanours.forEach((mis, index) => {
      cols.push(
        <div  key={index}>
          <p key={mis.citizenId}>
            {mis.citizenId} - {mis.misdemeanour}
            { getEmoji(mis.misdemeanour) }
            - {mis.date}
          </p>
          
          <img src='https://picsum.photos/100/50' />
        </div>
      );
    });

    return cols;
  }

    return (
        <>
          <h1>Misdemeanour!</h1>
          
          {buildRows()}
        </>
    )
}