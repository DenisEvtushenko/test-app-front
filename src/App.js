import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './assets/Footer';
import Home from './pages/Home';
import Page from './pages/Page';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movies'>
              <Page
                title='Movies'
                getElements='get-series'
              />
            </Route>
            <Route path='/series'>
              <Page
                title='Movies'
                getElements='get-series'
              />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
