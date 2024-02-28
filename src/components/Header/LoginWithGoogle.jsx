import React, { useEffect } from 'react';

const clientId = '130222587532-d86div3skbbuumg6j2ns8u3u3f8fj37b.apps.googleusercontent.com'; // Substitua pelo seu Client ID

const LoginWithGoogle = () => {
  useEffect(() => {
    const initClient = () => {
      window.gapi.client.init({
        clientId: clientId,
        scope: 'email profile',
      }).then(() => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        // Verifica se o usuário já está logado
        if (auth2.isSignedIn.get()) {
          updateUserInfo(auth2.currentUser.get());
        }
      });
    };

    window.gapi.load('client:auth2', initClient);
  }, []);

  const handleLogin = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(googleUser => {
      updateUserInfo(googleUser);
    });
  };

  const updateUserInfo = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    console.log('Token || ' + googleUser.getAuthResponse().id_token);
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    // Aqui você pode atualizar o estado do componente ou realizar outras ações com as informações do usuário
  };

  return (
    <button onClick={handleLogin}>Log in with Google</button>
  );
};

export default LoginWithGoogle;
