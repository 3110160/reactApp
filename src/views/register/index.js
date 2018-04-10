import React,{Component} from 'react'
import { Form, Icon, Input, Button ,message} from 'antd';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import './index.less'
const FormItem = Form.Item;

class Register extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if(values.passwordAgain!==values.password){
                    message.error('两次密码输入不一致');
                    return;
                }
                //console.log('Received values of form: ', values);
                axios.post('/register',{
                    userName:values.userName,
                    password:values.password
                }).then(res=>{
                    if(res.data.result&&res.data.result.code===1){
                        message.success('注册成功');
                        this.props.history.push('/manage');
                    }else{
                        message.error(res.data.error)
                    }
                })
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='loginBox'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('passwordAgain', {
                            rules: [{ required: true, message: 'Please input Password again!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <div>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                注册
                            </Button>
                        </div>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
const RegisterForm = Form.create()(Register);

export default withRouter(RegisterForm);