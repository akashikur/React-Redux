import React from "react";

const DisplayM = ({ disc }) => {
  disc = disc[0];
  console.log(disc[0]);
  return (
    <div className="definition">
      <h2>{disc.word}</h2>
      {disc.phonetic && <p>Phonetic: {disc.phonetic}</p>}
      {disc.phonetics && (
        <div>
          <h3>Audio Pronunciations:</h3>
          {disc.phonetics.map((phonetic, index) => (
            <div key={index}>
              <audio controls>
                <source src={phonetic.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      )}
      {disc.meanings &&
        disc.meanings.map((meaning, index) => (
          <div key={index}>
            <p>Part of Speech: {meaning.partOfSpeech}</p>
            {meaning.definitions && (
              <div>
                <h4>Definitions:</h4>
                <ul>
                  {meaning.definitions.map((definition, idx) => (
                    <li key={idx}>{definition.definition}</li>
                  ))}
                </ul>
              </div>
            )}
            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <div>
                <h4>Synonyms:</h4>
                <ul>
                  {meaning.synonyms.map((synonym, idx) => (
                    <li key={idx}>{synonym}</li>
                  ))}
                </ul>
              </div>
            )}
            {meaning.antonyms && meaning.antonyms.length > 0 && (
              <div>
                <h4>Antonyms:</h4>
                <ul>
                  {meaning.antonyms.map((antonym, idx) => (
                    <li key={idx}>{antonym}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default DisplayM;
