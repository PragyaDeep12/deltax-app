import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EachMovie from "./EachMovie";
import { getMovies } from "../Dao/MovieDao";
export default function ShowMovies() {
  const [movieList, setMovieList] = useState([
    // {
    //   id: 1,
    //   name: "Spider Man: Far From Home",
    //   image: "spiderman-far-from-home",
    //   releaseDate: "10/7/2019",
    //   likes: 114,
    //   ticketPrice: 100,
    //   percentage: 98,
    //   gerne: ["thriller"],
    //   trailerLink: "https://www.youtube.com/embed/AzKkTC0ZiXs",
    //   plot:
    //     "In the latest chapter of MCU`s Spider-Man series, our friendly neighborhood superhero decides to join his best friends Ned, MJ and the rest of the gang on a European vacation. However, Peter`s plans to leave heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent!"
    // },
    // {
    //   id: 2,
    //   name: "Star Wars: The Force Awakens",
    //   image: "the-star-wars",
    //   releaseDate: "10/7/2018",
    //   likes: 114,
    //   plot:
    //     "Star Wars: The Force Awakens is the seventh instalment in the glorious Star Wars saga. Lucasfilm and visionary director J.J. Abrams join forces to take you back again to a galaxy far, far away as Star Wars returns to the big screen with Star Wars: The Force Awakens. Years after the events of Episode VI, the learner is set to become the master, teaching others the ways of the force. But something dark lurks in the near future. Is this the return of the dark side?",
    //   trailerLink: "https://www.youtube.com/embed/sGbxmsDFVnE",
    //   ticketPrice: 100,
    //   percentage: 98,
    //   gerne: ["sci-fi", "drama"]
    // },
    // {
    //   id: 3,
    //   name: "Thor: The Dark World",
    //   image: "thor-the-dark-world",
    //   releaseDate: "10/7/2017",
    //   percentage: 98,
    //   likes: 114,
    //   ticketPrice: 100,
    //   gerne: ["drama", "fiction"],
    //   plot:
    //     "Thor battles to save all the Nine Realms from a mysterious enemy older than the universe itself. However, a shadowy race led by Malekith who is out for revenge, intends to descend the universe into darkness. Confronted by an enemy that even Odin and Asgard cannot overcome, Thor must reunite with Jane Foster and set out on a dangerous journey that will force him to make the ultimate sacrifice.\nThor battles an ancient race of Dark Elves led by the vengeful Malekith who threatens to plunge the universe back into darkness after the events of The Avengers.",
    //   trailerLink: "https://www.youtube.com/embed/npvJ9FTgZbM"
    // },
    // {
    //   id: 4,
    //   name: "Thor",
    //   image: "thor",
    //   releaseDate: "10/7/2017",
    //   percentage: 98,
    //   likes: 114,
    //   ticketPrice: 100,
    //   plot:
    //     "Thor battles to save all the Nine Realms from a mysterious enemy older than the universe itself. However, a shadowy race led by Malekith who is out for revenge, intends to descend the universe into darkness. Confronted by an enemy that even Odin and Asgard cannot overcome, Thor must reunite with Jane Foster and set out on a dangerous journey that will force him to make the ultimate sacrifice.\nThor battles an ancient race of Dark Elves led by the vengeful Malekith who threatens to plunge the universe back into darkness after the events of The Avengers.",
    //   trailerLink: "https://www.youtube.com/embed/npvJ9FTgZbM",
    //   gerne: ["drama", "fiction"]
    // },
    // {
    //   id: 5,
    //   name: "Avengers: Infinity Wars",
    //   image: "infinity-wars",
    //   releaseDate: "12/4/2019",
    //   percentage: 98,
    //   likes: 114,
    //   ticketPrice: 100,
    //   gerne: ["thriller", "drama", "fiction"],
    //   trailerLink: "https://www.youtube.com/embed/6ZfuNTqbHE8",
    //   plot:
    //     "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
    // },
    // {
    //   id: 6,
    //   name: "Bharat",
    //   image: "bharat",
    //   releaseDate: "20/6/2019",
    //   percentage: 98,
    //   likes: 114,
    //   ticketPrice: 100,
    //   gerne: ["drama"],
    //   plot:
    //     "When he was eight years old, Bharat made a promise to his father: to keep the family together no matter what. It`s a promise he keeps over the next 60 years of his life, despite each decade throwing a new set of challenges at him: some humorous, some thrilling and a few even dangerous!\nThis is the journey of a man and a nation together, beginning at the cusp of India`s birth as an Independent nation. Starring Salman Khan in the title role, Bharat is an endearing film about a man`s sacrifices to fulfill a promise made to his father.",
    //   trailerLink: "https://www.youtube.com/embed/Ea_GKoe81GY"
    // }
  ]);
  useEffect(() => {
    console.log("here");
    getMovies(setMovieList);
  }, []);
  return (
    <div className="text-right mt-1 mb-1">
      <Link to="/movies/add" className="btn btn-success ml-1 mr-3">
        + Movie
      </Link>

      <span className="text-left">
        <h4 className="ml-2">Show Movies</h4>
        <hr />
      </span>
      <div className="row text-center bg-light">
        <div className="col-md-3">
          <h5>PICTURE</h5>
        </div>
        <div className="col-md-1">
          <h5>NAME</h5>
        </div>
        <div className="col-md-1">
          <h5>YOR</h5>
        </div>

        <div className="col-md-5">
          <h5>PLOT</h5>
        </div>
        <div className="col-md-2">
          <h5>CAST</h5>
        </div>
      </div>
      {movieList.map((item, index) => {
        return <EachMovie movie={item} key={index} />;
      })}
    </div>
  );
}
