import React from 'react';
import { urls } from '../root/constant';
import { UserService } from '../service/user-service';

export class User extends React.Component {
    constructor(props) {
        super();
        this.state = {
            repos: [],
            owner: {}
        }
        this.getUsersRepo = this.getUsersRepo.bind(this);
    }

    componentDidMount() {
        this.getUsersRepo();
    }

    getUsersRepo() {
        let url = urls.getUsers + this.props.match.params.id + '/repos'
        UserService.getCall(url, {}).then((res) => {
            console.log(res);
            this.setState({ repos: res });
            this.setState({ owner: res[0].owner })
        }).catch(err => {
            alert('Something went wrong');
        });
    }

    render() {
        return (
            <div>
                <div className="col-md-12">
                    <div className="col-md-6">
                        <div className="col-md-4">
                            <img src={this.state.owner.avatar_url} height="50" width="50" />
                        </div>
                        <div className="col-md-4">
                            <label>Name: </label>
                        </div>
                        <div className="col-md-4">
                            {this.state.owner.login}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            {this.state.repos.map((item) => (
                                <li key={item.id} className="list-group-item">
                                    <h1>{item.name}</h1>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}