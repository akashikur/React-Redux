import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DisplayM from "./DisplayM";

const History = () => {
  const [disc, setDis] = useState();
  const { word } = useSelector((state) => state);
  function displayHistory({ item }) {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${item}`)
      .then((response) => {
        setDis(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container">
      {!disc && (
        <div>
          <h2>Search History</h2>
          <div className="hlinks">
            {word &&
              word.map((item, index) => (
                <p key={index} onClick={() => displayHistory({ item })}>
                  {item}
                </p>
              ))}
          </div>
        </div>
      )}

      {disc && <DisplayM disc={disc} />}
    </div>
  );
};

export default History;
