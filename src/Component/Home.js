import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchword,
  seterror,
  setloading,
} from "../Redux/action/historyaction";
import axios from "axios";
import DisplayM from "./DisplayM";

const Home = () => {
  const [word, setWord] = useState("");
  const [disc, setDisc] = useState();
  const { loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleSearch() {
    dispatch(setloading());
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        dispatch(searchword(word));
        setDisc(response.data);
        dispatch(seterror());
      })
      .catch((error) => {
        dispatch(seterror("error"));
      });
  }
  return (
    <div>
      {loading && <h1>loading</h1>}
      {error && <h1>Word not found</h1>}
      <div className="search">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {disc && <DisplayM disc={disc} />}
    </div>
  );
};
export default Home;
