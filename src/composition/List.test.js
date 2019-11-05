import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import STORE from '../store';
import List from './List';

let testList = STORE.lists[0];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List 
        id={testList.id} 
        header={testList.header}
        cards={testList.cardIds.map(id => STORE.allCards[id])}
        />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List 
        id={testList.id} 
        header={testList.header}
        cards={testList.cardIds.map(id => STORE.allCards[id])}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });