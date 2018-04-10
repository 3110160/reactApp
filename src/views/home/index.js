import React, {Component} from 'react';
import axios from 'axios'
import {Tag, Avatar, Icon, Button} from 'antd'
import './index.less'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articlesList: [],
            userList: [],
        };
    }

    componentDidMount() {
        this.getBlogList();
        this.getUserList();
    }

    //todo 获取文章列表
    getBlogList() {
        axios.get('/getBlogList', {
            params: {
                pageNum: 1,
                pageSize: 5
            }
        }).then(res => {
            console.log(res.data.result.list)
            this.setState({
                articlesList:res.data.result.list
            })
        })
    }

    //todo 获取作者列表
    getUserList() {
        axios.get('/getBlogUserList')
            .then(res => {
                console.log(res.data);
                this.setState({
                    userList:res.data.result.list
                })
            })
    }

    _renderArticles(articlesList) {
      return articlesList.length?
            articlesList.map((item,index)=>{
                return (
                    <div className='showBox' key={index}>
                        <div className='left'>
                            <div className='info'>
                                <Avatar icon="user"/>
                                <span style={{color: '#333333', fontSize: 12, marginLeft: 8}}>{item.user_name}</span>
                                <span style={{color: '#999999', fontSize: 12, marginLeft: 8}}>{item.createtime}</span>
                            </div>
                            <div className='articleTitle'>
                                <div>{item.article_title}</div>
                            </div>
                            <div className='Fragment'>
                                <p>{item.article_desc}</p>
                            </div>
                            <div className='footer'>
                        <span>
                            <Icon type="heart"/>
                            <i>{item.love_count}</i>
                        </span>
                                <span>
                            <Icon type="message"/>
                            <i>{item.comment_count}</i>
                        </span>
                            </div>
                        </div>
                        <div className='right'>
                            {/*<div className='imgBox'>
                                <img
                                    src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1288375098,338412828&fm=173&app=12&f=JPEG?w=218&h=146&s=67409947C62A0515078A302A03001012"
                                    alt=""/>
                            </div>*/}
                        </div>
                    </div>
                )
            }):''
    }

    _renderUsers(userList){
        return userList.map((item,index)=>{
            return <div className='block' key={index}>
                <div className='avatar'>
                    <Avatar size='large' icon="user"/>
                </div>
                <div style={{marginLeft: 5}}>
                    <div className="infoTop">
                        <span>{item.user_name}</span>
                        <a href='javascript:void(0)' className='guanz'>+关注</a>
                    </div>
                    <div className='authorsInfo'>
                        <span>写了{item.article_count}篇</span>
                        <span>获得{item.love_count}个喜欢</span>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        let {articlesList,userList} = this.state;
        return (
            <div className='blogHome'>
                <div className='topics'>
                    <div className='title'>热门专题</div>
                    <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                </div>
                <div className='content'>
                    <div className='leftContent'>
                        <div className='articleList'>
                            {this._renderArticles(articlesList)}
                        </div>
                    </div>
                    <div className='rightContent'>
                        <div className='authors'>
                            <h3 style={{color: '#969696'}}>推荐作者</h3>
                            {this._renderUsers(userList)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Home;