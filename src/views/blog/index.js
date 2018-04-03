import React, {Component} from 'react';
import {Route,Switch} from "react-router-dom";
import axios from 'axios'
import {Input,Button,BackTop} from 'antd'
import Home from '../home'
import './index.less'

const Search = Input.Search;

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: []
        };
    }

    componentDidMount() {

    }

    getUserInfo() {
        axios.get('/user', {
            params: {
                id: 1
            }
        }).then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div className='blog'>
                <div className='header'>
                    <div className="logo">BOLGS</div>
                    <div className="searchBar">
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </div>
                    <div className='btns'>
                        <Button type="primary">登陆</Button>
                    </div>
                </div>
                <Switch>
                    <Route path='/app/blog' component={Home}/>
                </Switch>
                <BackTop />
            </div>
        )
    }

}
export default Blog;