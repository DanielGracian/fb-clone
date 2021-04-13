import { Fragment } from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  const user = null;
  return (
    <div className="App">
      {user ? (
        <Login />
      ) : (
        <Fragment>
          <Header />

          <div className="app-body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Fragment>
      )
      }
    </div>
  );
}

export default App;
