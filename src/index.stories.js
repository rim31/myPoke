import React from 'react';
import { Button } from '@storybook/react/demo';
// import App from './components/App';


export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);

// export const App = () => (
//   <App />
// );

