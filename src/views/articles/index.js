import React, {Component} from 'react';
import axios from 'axios'
import {Avatar,Card} from 'antd'
import './index.less'

class Article extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            content:'',
            authorInfo:{

            },
            articleInfo:{

            }
        }
    }

    componentDidMount() {
        this.getArticle();
    }

    //todo 获取文章
    getArticle(){
        axios.get('/getArticleInfo',{
            params:{
                id:2
            }
        }).then((res)=>{
            this.setState({
                title:res.data.result.title,
                content:res.data.result.content
            })
        })
    }

    renderArticle(html){
        return <div className='content' dangerouslySetInnerHTML={{__html:html}}></div>
    }

    render(){
        let {title,content} = this.state;
        return(
            <div className='articlePage'>
                <h1>{title}</h1>
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
                {this.renderArticle(content)}
                {
                    !content?
                    <Card loading style={{ width: '100%',border:'none',padding:0 }}></Card>
                        :''
                }
            </div>
        )
    }
}

export default Article;