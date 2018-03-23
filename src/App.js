import React, { Component } from 'react';
import MenuConfig from './menu.config';
import {Link} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout,
    {SubMenu} = Menu;
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            collapsible:true,
            collapsed:false
        };
    }

  renderMenu(){
      let menuList = [];
      MenuConfig.forEach((item,index)=>{
          item.menus
          ?menuList.push(<SubMenu
                  key={'sub'+index}
                  title={<span><Icon type={item.icon} />{item.name}</span>}>
                  {
                      item.menus.map((i,dex)=>{
                          return (<Menu.Item key={index+'-'+dex}>
                              <Link to={i.path}>
                                  <Icon type={i.icon} />{i.name}</Link>
                          </Menu.Item>)
                      })
                  }
          </SubMenu>)
          :menuList.push(<Menu.Item key={index}>
              <Icon type={item.icon} />
              <span className="nav-text">{item.name}</span>
          </Menu.Item>)
      });
      return(
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              {menuList}
          </Menu>
      )
  };
  render() {
    return (
      <div className="App">
          <Layout>
              <Sider
                  style={{ overflow: 'auto', height: '100vh'}}>
                  <div className="logo" />
                  {this.renderMenu()}
              </Sider>
              <Layout>
                  <Header style={{ background: '#fff', padding: 0 }} />
                  <Content style={{ margin: '24px 16px 0', overflow: 'initial',minHeight:400 }}>
                      {this.props.children}
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                      Ant Design ©2016 Created by Ant UED
                  </Footer>
              </Layout>
          </Layout>
      </div>
    );
  }
}

export default App;
