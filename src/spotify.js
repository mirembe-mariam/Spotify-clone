//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 
"https://accounts.spotify.com/authorize";//wen a user clicks login it takes her to this so that spotify can authorize the login

const redirect_uri = "http://localhost:3000/"; // after logging in it shld redirect me to the spotify home page 
//The redirect URI is required for Spotify to redirect users back to your application after they have granted access to their Spotify account.

const clientId = "0f86ab4312a24d42962f6fc529e342ab" // clientId is a variable this identifer is used to authnticate your app with spotify API
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",//The scopes variable is an array of strings that specifies the permissions that your app needs to access user data from the Spotify API. In this case,
    // the permissions include things like reading the user's currently playing track, modifying playback state, and reading the user's top tracks.
    ];

export const getTokenFromUrl = () => {//This code defines a function called getTokenFromUrl that extracts the access token from the URL hash after the user logs in. 
    return window.location.hash
    //The function first retrieves the URL hash using window.location.hash and removes the '#' character using substring(1). 
    .substring(1)
    .split("&")//It then splits the string by the '&' character to create an array of key-value pairs.
    .reduce((initial, item) => {
    //The reduce method is then used to convert the array to an object, where the keys are the first parts of the key-value pairs and the values are the decoded second parts.
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial; //Finally, the object is returned.
    }, {});
}//This function is useful because Spotify sends the access token to the redirect URL as a URL fragment after the user logs in. The getTokenFromUrl function can be used to extract the token from the URL and store it in the application state for later use in API requests.

export const loginUrl =  `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
//{authEndpoint} is a variable that contains the Spotify authorization endpoint URL.
//client_id=${clientId} is a parameter that specifies your Spotify developer account client ID.
//redirect_url=${redirectUrl} is a parameter that specifies the URL to redirect the user to after they have logged in.
//scope=${scopes.join("%20")} is a parameter that specifies the permissions that your app requires, which are defined in the scopes array. The join() method is used to join the array elements into a single string with %20 (URL-encoded space) as the separator.
//response_type=token is a parameter that specifies the type of token that your app wants to receive from Spotify after the user logs in.
//show_dialog=true is a parameter that specifies whether or not to force the user to approve the app permissions every time they log in. If true, the user will be
// prompted every time they log in.