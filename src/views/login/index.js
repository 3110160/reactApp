import React,{Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import { Form, Icon, Input, Button ,message} from 'antd';
import axios from 'axios'
import './index.less'
const FormItem = Form.Item;

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('Received values of form: ', values);
                axios.post('/login',{
                    userName:values.userName,
                    password:values.password
                }).then(res=>{
                    if(res.data.result&&res.data.result.code===1){
                        message.success('登陆成功');
                        this.props.history.push('/');
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
                        <div>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </div>
                        <Link to='/register' replace>register now!</Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
const LoginForm = Form.create()(Login);

export default withRouter(LoginForm);