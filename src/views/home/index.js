import React, {Component} from 'react';
import axios from 'axios'
import {Tag, Avatar, Icon, Button} from 'antd'
import './index.less'

class Home extends Component {
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
                            <div className='showBox'>
                                <div className='left'>
                                    <div className='info'>
                                        <Avatar icon="user"/>
                                        <span style={{color: '#333333', fontSize: 12, marginLeft: 8}}>余博文</span>
                                        <span style={{color: '#999999', fontSize: 12, marginLeft: 8}}>2018-04-03</span>
                                    </div>
                                    <div className='articleTitle'>
                                        <div>我～走出去了</div>
                                    </div>
                                    <div className='Fragment'>
                                        <p>三原则：图原创，文原创，诗原创。 一扇门 推开是红尘 关上是浮生 一个人 红尘惆怅客 浮生寂寞人</p>
                                    </div>
                                    <div className='footer'>
                                        <span>
                                            <Icon type="heart"/>
                                            <i>3</i>
                                        </span>
                                        <span>
                                            <Icon type="message" />
                                            <i>100</i>
                                        </span>
                                    </div>
                                </div>
                                <div className='right'>
                                    <div className='imgBox'>
                                        <img
                                            src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1288375098,338412828&fm=173&app=12&f=JPEG?w=218&h=146&s=67409947C62A0515078A302A03001012"
                                            alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className='showBox'>
                                <div className='left'>
                                    <div className='info'>
                                        <Avatar icon="user"/>
                                        <span style={{color: '#333333', fontSize: 12, marginLeft: 8}}>余博文</span>
                                        <span style={{color: '#999999', fontSize: 12, marginLeft: 8}}>2018-04-03</span>
                                    </div>
                                    <div className='articleTitle'>
                                        <div>我～走出去了</div>
                                    </div>
                                    <div className='Fragment'>
                                        <p>三原则：图原创，文原创，诗原创。 一扇门 推开是红尘 关上是浮生 一个人 红尘惆怅客 浮生寂寞人</p>
                                    </div>
                                    <div className='footer'>
                                        <span>
                                            <Icon type="heart"/>
                                            <i>3</i>
                                        </span>
                                        <span>
                                            <Icon type="message" />
                                            <i>100</i>
                                        </span>
                                    </div>
                                </div>
                                <div className='right'>
                                    <div className='imgBox'>
                                        <img
                                            src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1288375098,338412828&fm=173&app=12&f=JPEG?w=218&h=146&s=67409947C62A0515078A302A03001012"
                                            alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className='showBox'>
                                <div className='left'>
                                    <div className='info'>
                                        <Avatar icon="user"/>
                                        <span style={{color: '#333333', fontSize: 12, marginLeft: 8}}>余博文</span>
                                        <span style={{color: '#999999', fontSize: 12, marginLeft: 8}}>2018-04-03</span>
                                    </div>
                                    <div className='articleTitle'>
                                        <div>我～走出去了</div>
                                    </div>
                                    <div className='Fragment'>
                                        <p>三原则：图原创，文原创，诗原创。 一扇门 推开是红尘 关上是浮生 一个人 红尘惆怅客 浮生寂寞人</p>
                                    </div>
                                    <div className='footer'>
                                        <span>
                                            <Icon type="heart"/>
                                            <i>3</i>
                                        </span>
                                        <span>
                                            <Icon type="message" />
                                            <i>100</i>
                                        </span>
                                    </div>
                                </div>
                                <div className='right'>
                                    <div className='imgBox'>
                                        <img
                                            src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1288375098,338412828&fm=173&app=12&f=JPEG?w=218&h=146&s=67409947C62A0515078A302A03001012"
                                            alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className='showBox'>
                                <div className='left'>
                                    <div className='info'>
                                        <Avatar icon="user"/>
                                        <span style={{color: '#333333', fontSize: 12, marginLeft: 8}}>余博文</span>
                                        <span style={{color: '#999999', fontSize: 12, marginLeft: 8}}>2018-04-03</span>
                                    </div>
                                    <div className='articleTitle'>
                                        <div>我～走出去了</div>
                                    </div>
                                    <div className='Fragment'>
                                        <p>三原则：图原创，文原创，诗原创。 一扇门 推开是红尘 关上是浮生 一个人 红尘惆怅客 浮生寂寞人</p>
                                    </div>
                                    <div className='footer'>
                                        <span>
                                            <Icon type="heart"/>
                                            <i>3</i>
                                        </span>
                                        <span>
                                            <Icon type="message" />
                                            <i>100</i>
                                        </span>
                                    </div>
                                </div>
                                <div className='right'>
                                    <div className='imgBox'>
                                        <img
                                            src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1288375098,338412828&fm=173&app=12&f=JPEG?w=218&h=146&s=67409947C62A0515078A302A03001012"
                                            alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className='showBox'>
                                <div className='left'>
                                    <div className='info'>
                                        <Avatar icon="user"/>
                                        <span style={{color: '#333333', fontSize: 12, marginLeft: 8}}>余博文</span>
                                        <span style={{color: '#999999', fontSize: 12, marginLeft: 8}}>2018-04-03</span>
                                    </div>
                                    <div className='articleTitle'>
                                        <div>我～走出去了</div>
                                    </div>
                                    <div className='Fragment'>
                                        <p>三原则：图原创，文原创，诗原创。 一扇门 推开是红尘 关上是浮生 一个人 红尘惆怅客 浮生寂寞人</p>
                                    </div>
                                    <div className='footer'>
                                        <span>
                                            <Icon type="heart"/>
                                            <i>3</i>
                                        </span>
                                        <span>
                                            <Icon type="message" />
                                            <i>100</i>
                                        </span>
                                    </div>
                                </div>
                                <div className='right'>
                                    <div className='imgBox'>
                                        <img
                                            src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1288375098,338412828&fm=173&app=12&f=JPEG?w=218&h=146&s=67409947C62A0515078A302A03001012"
                                            alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rightContent'>
                        <div className='authors'>
                            <h3 style={{color: '#969696'}}>推荐作者</h3>
                            <div className='block'>
                                <div className='avatar'>
                                    <Avatar size='large' icon="user"/>
                                </div>
                                <div style={{marginLeft: 5}}>
                                    <div className="infoTop">
                                        <span>余博文</span>
                                        <a href='javascript:void(0)' className='guanz'>+关注</a>
                                    </div>
                                    <div className='authorsInfo'>
                                        <span>写了100篇</span>
                                        <span>获得100个喜欢</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Home;