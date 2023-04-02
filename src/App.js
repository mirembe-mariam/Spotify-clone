import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login/Login.js";
import Player from "./Player/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
const spotify = new SpotifyWebApi(); //craetes a new instance of the spotifywebapi class. this enbales us to make requests to the spotify webapi

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    //is used to extract the access token from the URL hash
    const hash = getTokenFromUrl(); //varibale hash is created to store the token frm the function getTokenFromUrl
    window.location.hash = ""; //we dont want the token to be in url for security purposes.
    const _token = hash.access_token; //store the accesstoken in the _token variable
    //Yes, that is correct. hash is created by calling getTokenFromUrl() function and storing the result in a variable. In order to keep the hash variable unchanged and not modify it, we create another variable _token to store the actual token value.
    // This is considered good practice as it keeps the original hash variable untouched and makes the code more readable and easier to understand.
    if (_token) {
      //If the _token variable is truthy, we call the setToken function to update the state of the token variable with the new value of _token.
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("show me user", user);
      });
    }
    console.log("i have a token", token); //useEffect hook logs the token to the console
  }, []); //empty array specifies that the effect should only be run once, when the component mounts.
  return (
    <div className="app">
      {
        //the code below states that if token state is value is truthy return the player else retun to the login page
        token ? <Player /> : <Login />
      }
    </div>
  );
}

export default App;
//useEffect takes two arguments:A function to run after every render (or after a specific value changes, if you pass dependencies as the second argument).
//An optional array of dependencies, which tells React when to re-run the effect (i.e., when one or more of the dependencies change).If you pass an empty array ([]) as the second argument, the effect will only run once (after the component is mounted) and never again.
//spotify.setAccessToken(_token) sets the access token obtained from Spotify's authentication process to the SpotifyWebApi instance we created using const spotify = new SpotifyWebApi();.
//spotify.getMe().then(user =>{...}) makes a request to Spotify's API to get the user profile of the authenticated user, and then logs the user object to the console.
//Together, these lines of code allow us to use the spotify-web-api-js library to make authorized requests to the Spotify Web API, which we can use to build a clone of the Spotify app.
