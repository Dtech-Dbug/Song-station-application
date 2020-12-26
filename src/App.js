import React, { useState } from "react";
import "./styles.css";
const songs = {
  BollyHits: [
    {
      name: "Tum hi ho",
      artist: "Arijit Singh"
    },
    {
      name: "Sunn raha hein na",
      artist: "Ankit Tiwary"
    },
    {
      name: "Bekhayali",
      artist: "Sahet Tandon"
    },
    {
      name: "Tujhe dekha to ye jaana sanam",
      artist: "Jatin-Lalit"
    }
  ],
  Classic90sHindi: [
    {
      name: "Uden Jab Jab Zulfen Teri",
      artist: "-Asha Bhosle and Mohammed Rafi"
    },
    {
      name: "Haal kaisa hein janab ka",
      artist: "Asha Bhosle and Kishore Kumar."
    },
    {
      name: "Pyar Hua Ikrar Hua Hai Pyar Se",
      artist: "Lata Mangeskar , Manna Dey , Shankar-Jaikishan"
    },
    {
      name: "Mera joota hein Japani",
      artist: "Mukesh"
    },
    {
      name: "Chhod Do Aanchal Zamana Kya Kahega",
      artist: "Asha Bhosle and Kishore Kumar"
    },
    {
      name: "Ek Ladki Bheegi Bhagi Si",
      artist: "Kishore Kumar"
    }
  ],
  Pop: [
    {
      name: "Updown Funk",
      artist: "Bruno Mars"
    },
    {
      name: "Shape Of You",
      artist: "Ed Sheeran"
    },
    {
      name: "Truly Madly Deeply",
      artist: "Savage Garden"
    },
    {
      name: "Closer",
      artist: "The Chainsmokers"
    },
    {
      name: "Rolling in the Deep",
      artist: "Adele"
    }
  ],
  Rock: [
    {
      name: "Carnival Of Rust",
      artist: "Poets of the Fall"
    },
    {
      name: "HElP",
      artist: "Papa Roch"
    },
    {
      name: "Centuries",
      artist: "Fall Out Boy"
    },
    {
      name: "Nothing else matters",
      artist: "Metallica"
    },
    {
      name: "November Rain",
      artist: "Guns N' Roses"
    },
    {
      name: "Don't Cry",
      artist: "Guns N' Roses"
    }
  ],
  AltRock: [
    {
      name: "Smells like teen spirit",
      artist: "Nirvana"
    },
    {
      name: "In the end",
      artist: "Linkin Park"
    },
    {
      name: " Welcome to the Black Parade",
      artist: "My Chemical Romance"
    },
    {
      name: "Boulevard of Broken Dreams",
      artist: "Green Day"
    },
    {
      name: "Numb",
      artist: "Linkin Park"
    },
    {
      name: "Creep",
      artist: "Radiohead"
    }
  ],
  Rap: [
    {
      name: "California Love",
      artist: "Tupac Shakur"
    },
    {
      name: " Lose Yourself",
      artist: "Eminem"
    },
    {
      name: "Dear Mama",
      artist: "Tupac Shakur"
    },
    {
      name: "Still D.R.E",
      artist: "Dr. Dre"
    },
    {
      name: "Stan",
      artist: " Eminem"
    }
  ]
};

const songsRecommended = Object.keys(songs);

export default function App() {
  let [songName, setSongName] = useState("BollyHits");
  function btnClickHandler(genre) {
    setSongName(genre);
  }

  return (
    <div className="App">
      <header>
        <h1 className="heading">
          🎵 <span>Song</span> Station
        </h1>
        <hr></hr>
        <div className="quote">
          “Music is the wine that fills the cup of silence.” ― Robert Fripp
        </div>
        <hr></hr>
        <h2 className="description">
          <span id="first">Song</span> <span id="second">Station</span> is an
          online junction of music with a handful of song suggestions of popular
          genres.
          <span>
            The lists are in no specific order and are updated monthly.
          </span>
        </h2>
        <br></br>
        <span>
          <h3>Click on the tabs to get a handful of song suggestions.👇</h3>
        </span>
      </header>
      <hr></hr>
      <div className="container">
        {songsRecommended.map(function (genre) {
          return (
            <button className="buttons" onClick={() => btnClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        <ul className="result">
          {songs[songName].map(function (song) {
            return (
              <li>
                <span className="music">🎵</span>
                <span>
                  <h2> {song.name}</h2>
                </span>
                <h4>{song.artist}</h4>
              </li>
            );
          })}
        </ul>
      </div>
      <hr></hr>
      <footer>
        <div className="about">
          <h2>
            About <span className="first">Song</span>{" "}
            <span className="second">Station</span>
          </h2>
          <p>
            <span className="first">Song</span>{" "}
            <span className="second">Station</span> is an online junction for a
            handful of song suggestions.The List is usually updated every month
            with fresh songs.
          </p>
        </div>
        <div className="footer-footer">
          <div className="youtube">
            <a href="https://www.youtube.com" target="_blank">
              {" "}
              Search in Youtube.
            </a>
          </div>
          <div className="spotify">
            <a href="https://www.spotify.com/in/" target="_blank">
              {" "}
              Search in Spotify.
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
