import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamShow from './Streams/StreamShow';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamDelete from './Streams/StreamDelete';
import NavBar from './NavBar/NavBar';
import history from '../history'
import './app.css'
class App extends React.Component 
{
    render(){
        return (
          
                <Router history={history}>
                    <div>
                        <NavBar />
                        <div className='ui container'>
                        <Switch>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" exact component={StreamCreate}/>
                        <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                        <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                        <Route path="/streams/:id" exact component={StreamShow}/>
                        </Switch>
                        </div>
                    </div>
                </Router>
          
        )
    }
}

export default App;