import React from 'react';
import {render} from 'react-dom';
import {Home} from './components/Home';
import {BrowserRouter, HashRouter, Route, Redirect} from 'react-router-dom';
import {User} from "./components/User";


class App extends React.Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <Route history={BrowserRouter} exact path="/" component={Home}/>
                    <Route path="/users/:id" component={User}/>
                </div>
            </HashRouter>
        )
    }
}
render(<App/>, document.getElementById('app'));