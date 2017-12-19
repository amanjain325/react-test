import React from 'react';
import { UserService } from '../service/user-service';
import { urls } from '../root/constant';
import {BrowserRouter, HashRouter, Route, Redirect} from 'react-router-dom';

let styles = {
    list: {
        'width': "55%",
        'marginLeft': "10%"
    }
}
export class Home extends React.Component {
    users = [];
    constructor(props) {
        super();
        this.state = {
            users: [],
        };
        this.getUsersList = this.getUsersList.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.getListStyles = this.getListStyles.bind(this);
    }

    getUsersList(q) {
        let params = { q: q }
        UserService.getCall(urls.searchUsers, params).then((res) => {
            if (res && res.items && res.items.length > 0) {
                this.setState({ users: res.items })
            }
        }).catch(err => {
            alert('Something went wrong');
        });
    }

    onChangeText(event) {
        let q = event.target.value;
        if (q.length == 0) {
            this.setState({ users: [] })
        } else {
            this.getUsersList(q);
        }

    }

    getListStyles() {
        return Object.assign(
            {},
            styles.list
        );
    }
    navigate(item){
        console.log(item);
        this.props.history.push('/users/' + item.login)
    }

    render() {
        return (
            <div>
                <div className="form-group" style={this.getListStyles()}>
                    <label>Search User:</label>
                    <input type="text" className="form-control" onChange={(event) => this.onChangeText(event)}/>
                </div>
                <ul className="list-group" style={this.getListStyles()}>
                    {this.state.users.map((item) => (
                        <li key={item.id} className="list-group-item" onClick={() => this.navigate(item)}>
                            <div>
                                <img src={item.avatar_url} height="50" width="50" />
                            </div>
                            <span>{item.login}</span>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}