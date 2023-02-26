import { useEffect, useState } from "react";
import axios from 'axios';

export const Misdemeanour : React.FC = () => {

  const defaultOptions = [
    {
      name: "- Filter -",
      value: "none"
    },
    {
      name: "Mild Public Rudeness",
      value: "rudeness",
    },
    {
      name: "Speaking in a Lift",
      value: "lift",
    },
    {
      name:"Not Eating Your Vegetables",
      value: "vegetables",
    },
    {
      name: "Supporting Manchester United",
      value: "united",
    },
  ];

  const [filter, setFilter] = useState<any>(defaultOptions[0].value);

  const [options, setOptions] = useState<any>(defaultOptions);

  const [misdemeanours, setMisdemeanours] = useState<Array<any>>([]);

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

  useEffect(() => {
	  getMisdemeanours(15);
  }, []);

  const getMisdemeanours = async (number : number) => {
    const apiResponse = await axios.get(`http://localhost:8080/api/misdemeanours/${number}`);
    setMisdemeanours(apiResponse.data.misdemeanours);
    console.log(misdemeanours);
  };

  const filteredMisdemeanours = ((filterString: String) => {
    console.log(filterString)
    if (filterString === 'none') {
      return misdemeanours;
    }
    return misdemeanours.filter(item => item.misdemeanour === filterString);
  })

  const buildRows = () => {

		// we'll need arrays to store the rows and cols in, and they will be of type JSX.Element
		let rows : Array<JSX.Element> = [], cols : Array<JSX.Element> = [];

		filteredMisdemeanours(filter).forEach((mis, index) => {
      cols.push(
        <div key={index}>
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

  const handleChange = (event: any) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <h1>Misdemeanour!</h1>

      <select onChange={handleChange}>
        {options.map(item => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      
      {buildRows()}
    </>
  )
}