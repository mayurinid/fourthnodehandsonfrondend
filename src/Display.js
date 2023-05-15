import React from 'react';
import { NavLink } from 'react-router-dom';

const Display = (props) => {
  const { imgUrl, title, description, elementsid } = props;

  return (
    <NavLink
      to={{ pathname: `${elementsid}`, state: { title, img: imgUrl, description, id: elementsid } }}
    >
      <div>
        <div className="DataBolly">
          <div>
            <img src={imgUrl} alt="not found" width="300px" height="200px" />
          </div>
          <div>
            <h5>{title}</h5>
            <p>{description}....</p>
          </div>
        </div>
        <hr style={{ fontWeight: "40px", color: "black" }} />
      </div>
    </NavLink>
  );
};

export default Display;