export const environment = {
  production: false,
  authEnabled: false,
  title: 'ngSecurity',
  markdownPath: '/assets/markdown/',
  api: 'http://localhost:3000/',
  firebaseConfig: {
    apiKey: 'AIzaSyBwl5TaYdRkH9T-BkyTDXQ2ceMlwwrYbHs',
    authDomain: 'ngbrz-557e3.firebaseapp.com',
    databaseURL: 'https://ngbrz-557e3.firebaseio.com',
    projectId: 'ngbrz-557e3',
    storageBucket: 'ngbrz-557e3.appspot.com',
    messagingSenderId: '380109209966',
    appId: '1:380109209966:web:d7a7c313fdbad73443017f',
    measurementId: 'G-VHXZR6SRP7',
  },
  o365Config: {
    tenant: 'd92b247e-90e0-4469-a129-6a32866c0d0a',
    clientId: '4e60c128-a813-4031-bd99-cf4327cce885',
    cacheLocation: 'localStorage',
    endpoints: {
      graphApiUri: 'https://graph.microsoft.com',
      sharePointUri: 'https://integrationsonline.sharepoint.com',
    },
    returnUrl: 'https://localhost:4200',
  },
};
