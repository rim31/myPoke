import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Counter from './Counter';

export const Counter = {
    count:0,
    pokemons:[]
};

export const actions = {
  minusCount: action('minusCount'),
  plusCount: action('plusCount'),
};

storiesOf('Counter', module)
  .add('default', () => <Counter Counter={Counter} {...actions} />)
  .add('minusCount', () => <Counter Counter={{ ...Counter, state: 'MINUS_COUNT' }} {...actions} />)
  .add('plusCount', () => <Counter Counter={{ ...Counter, state: 'PLUS_COUNT' }} {...actions} />);