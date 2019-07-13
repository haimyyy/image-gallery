import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Header from '../components/Header';
import Body from '../components/Body';
import Modal from '../components/Modal';

it('renders without crashing - App', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - Header', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - Body', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Body />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - Modal', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal loadConfiguration={()=>{}}
                         isModalOpen={true}
                         updateConfiguration={()=>{}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


// Todo: Add real tests to check components logic and behaviour