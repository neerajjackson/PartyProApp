import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/Viewmovies.css";

const UserPage = () => {
  const [Movies, setMovies] = useState([]);
  const Navigate = useNavigate();

  return (
    <>
      <h4
        style={{
          backgroundColor: "#f1f2f8",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="text-center "
      >
        <b>MOVIES</b>
        <div className="">
          <button
            className="btn btn-success"
            onClick={() => Navigate("/addmovie")}
          >
            Add Movie
          </button>
          <button
            className="btn btn-danger"
            onClick={() => Navigate("/deletemovie")}
          >
            Delete Movie
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => Navigate("/userview")}
          >
            User
          </button>
        </div>
      </h4>
      <div className="grid grid-cols-3 gap-10">
        {Movies.map((movie, index) => (
          <div
            key={index}
            className="container-fluid bg-gray-200 rounded"
          >
            <div className="row">
              <div className="col-12 mt-4">
                <div
                  className="card flex"
                >
                  <div className="img-square-wrapper">
                    <img
                      className="card-img-top p-5"
                      src={movie.movieImg}
                      height="250"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">
                      <b>{movie.movieName}</b>
                    </h4>
                    <h6 className="card-title">
                      <b>Genre: </b>
                      {movie.genre}
                    </h6>
                    <h6 className="card-title">
                      <b>Director: </b>
                      {movie.director}
                    </h6>
                    <h6 className="card-title">
                      <b>Actors: </b>
                      {movie.actors.map((actor, idx) => (
                        <p key={idx}>{actor}</p>
                      ))}
                    </h6>

                    <button
                      onClick={() => Navigate(`/updatemovie/${movie.mid}`)}
                      className="btn btn-secondary margin-left"
                    >
                      Edit here
                    </button>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserPage;
