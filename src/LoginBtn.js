import React from 'react';
import GoogleLogin from 'react-google-login';

const LoginBtn = () => {
    const responseGoogle = (response) => {
        console.log(response);
        // You can access user information from the response object
        const userName = response.profileObj.name;
        console.log(`User's name: ${userName}`);
      };
    
      return (
        <div>
          <h1>Sign in with Google</h1>
          <GoogleLogin
            clientId="629235766378-v8s1ibpsrhsp23u89fvvdtmguaed7c2k.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      );
    };

export default LoginBtn;