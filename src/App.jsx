
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Auth from './components/Auth.jsx';
import Feed from './components/Feed.jsx';
import Profile from './components/Profile.jsx';
import CreatePost from './components/CreatePost.jsx';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Auth} />
          <Route path="/profile" component={Profile} />
          <Route path="/create" component={CreatePost} />
          <Route path="/" component={Feed} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
