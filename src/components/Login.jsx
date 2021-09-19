import {useEffect, useState} from 'react';
import '@fontsource/roboto/300.css';
import { useLocation } from 'react-router-dom'
import { Base64 } from 'js-base64';
import localStorage from 'localStorage';
import Body from './Body'

export const authEndpoint = 'https://accounts.spotify.com/authorize';


const clientId = "31d37b2e123448e089b6253898f3c854";
const clientSecret = "392d8c9c429c40aca8be2fa7ad828a75";
const redirectUri = "http://localhost:3000/";
const scopes = 'streaming user-read-private user-read-email user-modify-playback-state user-read-playback-state';

const authRedirectUrl = 'https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + clientId +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirectUri);



function Login(props) {
    const [token, setToken] = useState('');
    const location = useLocation();
    useEffect(() => {
        console.log("Hello world from Audio component: ", authRedirectUrl);
        
        // first, try getting token from local storage
        const localToken = localStorage.getItem('token');
        if (localToken !== null && localToken !== undefined && localToken !== 'undefined') {
            setToken(localToken);
            console.log("token gotten from local storage: ", localToken);
        } else {
            const _code = new URLSearchParams(location.search).get('code');
            if (_code) {
                console.log(_code);
                fetch("https://accounts.spotify.com/api/token",
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + Base64.encode(clientId+":"+clientSecret)
                    },
                    method: "POST",
                    body: "grant_type=authorization_code&code="+_code+"&redirect_uri="+redirectUri+"&client_id="+clientId
                })
                .then(res => res.json())
                .then(data => {
                    console.log("access token: ", data.access_token)
                    setToken(data.access_token);
                    localStorage.setItem('token', data.access_token);
                })
            } else {
                console.log("no authorization code -> need to sign in");
            }
        }
        
    }, [location.search]);

    
    return(
        <div>
         {!token && (
            <a
                className="btn btn--loginApp-link"
                href={authRedirectUrl}
            >
            Login to Spotify
            </a>
         )}
         {token && (
             <Body />
         )}
        </div>
    )
}

export default Login;