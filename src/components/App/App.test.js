import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    dispatch: () => {}
  }

  ReactDOM.render(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App {...props}/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
