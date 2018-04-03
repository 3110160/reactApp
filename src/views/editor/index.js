import React,{Component} from 'react'
import {Button,Modal,Input,Select} from 'antd'
// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import axios from 'axios'
import 'braft-editor/dist/braft.css'
import './index.less'
const Option = Select.Option;
const {TextArea} = Input;
class editorDemo extends Component {
    constructor(props){
        super(props);
        this.state={
            content:'',
            title:'',
            visible:false
        }
    }
    saveArticle(){
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({
            visible: false,
        });
        let {content} = this.state;
        axios.post('/saveArticle',{
            title:'1414',
            content:content
        })
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    selectChange=(value)=>{
        console.log(`selected ${value}`);
    };

    renderOptions(){
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return children;
    }

    handleChange = (content) => {
        this.setState({content})
    };

    handleRawChange = (rawContent) => {
        console.log(rawContent)
    };

    render () {
        const editorProps = {
            height: 300,
            contentFormat: 'html',
            initialContent:this.state.content,
            onChange: this.handleChange,
            onRawChange: this.handleRawChange
        };
        return (
            <div className="editorPage">
                <BraftEditor {...editorProps}/>
                <Button
                    className='saveBtn'
                    onClick={this.saveArticle.bind(this)}
                    type="primary">保存</Button>

                <Modal
                    title={null}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText='再看看'
                    okText='马上发表'
                >
                   <div className='contentBox'>
                       <div className='modalRow'>
                           <span>文章标题</span>
                           <Input placeholder="Basic usage" />
                       </div>
                       <div className='modalRow'>
                           <span>文章简介</span>
                           <TextArea
                               placeholder='不少于50个字'
                               autosize={{ minRows: 2, maxRows: 6 }} />
                       </div>
                       <div className='modalRow'>
                           <span>添加标签</span>
                           <Select
                               mode="multiple"
                               style={{ width: '100%' }}
                               placeholder="Please select"
                               defaultValue={['a10', 'c12']}
                               onChange={this.selectChange}
                           >
                               {this.renderOptions()}
                           </Select>

                       </div>
                   </div>
                </Modal>
            </div>
        )

    }

}

export default editorDemo;
