# Projeto 2 - Tecnologias Web

- Esse aplicativo tem como objetivo ser possível a criação de playlists com suas músicas favoritas e também receber uma playlist aleatória de acordo com a música ou artista que você pesquisar. A api utilizada foi: https://rapidapi.com/deezerdevs/api/deezer-1/
É possível pesquisar a música clicando no botão pesquisar, que é o primeiro botão na barra de pesquisa, e assim, quando aparecer os cards das músicas, clicar no botão que fica no lado direito do card. Dessa forma, é redirecionado para adicionar, clicando no botão mais a direita no card da playlists já existentes que aparecem ou criar uma nova playlist. Para criar uma playlist com músicas aleatórias baseadas em uma que você já escreveu, basta clicar no botão mais a direita dentro da barra de pesquisa.
- Além disso, uma implementação extra foi o acesso ao link da música no próprio deezer, por meio do card da música no botão á esquerda. O botão na página inicial fora da barra de pesquisa retorna as playlists existente e se clicar no nome da playlist, tem acesso ás músicas já adicionadas.
Por algum motivo, os icons não estão aparecendo quando foi feito o deploy para o Heroku, porém, se o aplicativo rodar localmente, os icons aparecem de acordo.
Link do heroku front-end: https://polar-castle-53848.herokuapp.com/
Link do heroku back-end: https://intense-headland-73841.herokuapp.com/
### Como deveria aparecer os icons:
<img width="918" alt="image" src="https://user-images.githubusercontent.com/72155007/169734418-e3b7ef2a-d7c5-4fd0-8614-6e7a01a6178a.png">
### Exemplo de fluxos:
1.1) Pesquisando a música:
<img width="904" alt="image" src="https://user-images.githubusercontent.com/72155007/169734622-861a1dee-79ff-4484-ad68-3a28f0efb369.png">
1.2) Depois de clicar no coração para adicionar á uma playlist:
<img width="950" alt="image" src="https://user-images.githubusercontent.com/72155007/169734666-d15eea88-96c3-482d-b4f4-82ffd3f65da4.png">
1.3) Após apertar em criar uma nova playlist: 
<img width="934" alt="image" src="https://user-images.githubusercontent.com/72155007/169734731-ff22ec93-520c-4a80-b77e-974f12f6ee07.png">
1.4) Poderia também, ao invés de criar uma nova playlist, apenas apertar no botão de mais em alguma playlist existente:
<img width="932" alt="image" src="https://user-images.githubusercontent.com/72155007/169735109-133587fe-15ae-43a8-8362-a00f05925d4d.png">
2.1) Criando playlist aleatória baseada em um artista:
<img width="945" alt="image" src="https://user-images.githubusercontent.com/72155007/169735187-0e89375c-71d0-48b4-9dc2-b64cc036e30c.png">
2.2) <img width="933" alt="image" src="https://user-images.githubusercontent.com/72155007/169735238-b487fa37-8ebb-4ce9-8f38-bef3ce839a41.png">




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
