This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

MyPokedex : React - (redux hook)

![alt text](https://github.com/rim31/myPoke/blob/master/pokedex.png)


- pagination
- like dislike pokemon
- display details and 3D model

- search in progress



#### get data from store : useSelector

```
const {details} = useSelector(state => ({
        ...state.nameReducer,
        ...state.detailsReducer,
        ...state.displayReducer,
        ...state.selectorReducer,
      }));
```

#### mapPropstoState : useDispatch

‘‘‘
    const dispatch = useDispatch();

    //mapDispatch : useDispatch
    function plusCount() {
      dispatch({
        type : "PLUS_COUNT",
        payload: {data: datum}
      })
    }
‘‘‘

#### componentDidMount : useEffect

‘‘‘
  async function fetchData() {
    var pokemons = [];
    const res = await  fetch("https://pokeapi.co/api/v2/pokemon/?limit=964");

    res
      .json()
      .then( res => {pokemons = (res.results)})
      .then( () => getAll(pokemons))
      .catch(err => console.log(err));
    }

// useEffect remplace componentDidMount
    useEffect(() => {
      fetchData();
    }, []) // [], permet d'eviter une continelle fectch des data, pour se comporter comme componentDidMount

‘‘‘


### TO DO :
https://www.youtube.com/watch?v=JvHB7XZUqO0&list=PLiKs97d-BatHEeclprFtCaw8RcNOYXUqN&index=2




## Available Scripts

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


#### Aide
https://www.youtube.com/watch?v=8aGhZQkoFbQ

https://www.youtube.com/watch?v=8xoEpnmhxnk
https://codesandbox.io/s/starting-redux-code-jflld
https://codesandbox.io/s/final-redux-code-dhbuc
