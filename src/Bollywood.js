import axios from 'axios';
import React, { useState } from 'react';
import Display from './Display';
import Routerp from './Routerp';

const Bollywood = () => {
  const token = localStorage.getItem('token');
  const [data1, setData1] = useState(null); // State to store the fetched data

  const showData = async () => {
    console.log(token);

    if (token === undefined) {
      alert("User is not authorized for this particular route");
    } else {
      try {
        const response = await axios.get('http://localhost:9000/api/category/bollywood', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });

        const fetchedData = response.data;
        setData1(fetchedData); // Update the state with the fetched data
        console.log(fetchedData, 'is clicked');
        console.log('button is clicked');
      } catch (error) {
        console.log(error);
        alert('Failed to fetch data');
      }
    }
  };

  return (
    <>
      <div>
        <button className='btn bt' onClick={showData}><Routerp/></button>
      </div>
      <div>
        {/* Render the fetched data */}
        {data1 && data1.map((n) => (
          <Display
            key={n.id}
            elementsid={n.id}
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 100)}
          />
        ))}
      </div>
    </>
  );
};

export default Bollywood;