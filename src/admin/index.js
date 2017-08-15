import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Icon } from 'antd'
import { QueryRenderer, graphql } from 'react-relay'
import modernEnvironment from '../env/index'
// import Editor from './editor'

class Admin extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      collapsed: false
    }

    this.onCollapse = this.onCollapse.bind(this)
  }

  onCollapse (collapsed) {
    console.log(collapsed)
    this.setState({collapsed})
  }

  render () {
    return (
      <QueryRenderer
        environment={modernEnvironment}
        query={
        graphql`
            query adminQuery($order:String,$offset:Int,$limit:Int) {
              categories{
                id
                slug
                name
              }
              tags{
                id
                slug
                name
              }
              articles(order:$order,offset:$offset,limit:$limit){
                id
                slug
                title
              }
            }`
      }
        variables={{
          order: 'updatedAt',
          offset: 0,
          limit: 10
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            const {Header, Content, Footer, Sider} = Layout
            const {SubMenu} = Menu
            return (
              <Layout>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                  <div className='logo' style={{height: 32, background: '#333', borderRadius: 6, margin: 16}} />
                  <Menu
                    theme='dark'
                    defaultSelectedKeys={['1']}
                    mode='inline'>
                    <Menu.Item key='1'>
                      <Icon type='pie-chart' />
                      <span> Monitor </span>
                    </Menu.Item>
                    <Menu.Item key='2'>
                      <Icon type='desktop' />
                      <span>reserve</span>
                    </Menu.Item>
                    <SubMenu key='categories' title={<span><Icon type='user' /><span>Category</span></span>}>
                      {props.categories.map((category) => <Menu.Item key={category.id}>{category.name}</Menu.Item>)}
                    </SubMenu>
                    <SubMenu key='tags' title={<span><Icon type='user' /><span>Tag</span></span>}>
                      {props.tags.map((tag) => <Menu.Item key={tag.id}>{tag.name}</Menu.Item>)}
                    </SubMenu>
                    <SubMenu key='articles' title={<span><Icon type='team' /><span>Article</span></span>}>
                      {props.articles.map((article) => <Menu.Item key={article.id}>{article.title}</Menu.Item>)}
                    </SubMenu>
                    <Menu.Item key='9'>
                      <Icon type='file' />
                      <span>File</span>
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout>
                  <Header style={{background: '#fff', padding: 0}} />
                  <Content style={{margin: '0 16px'}}>
                    <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    Bill is a cat.
                  </div>
                  </Content>
                  <Footer style={{textAlign: 'center'}}>
                  Hacker ©2017 Powered by Rose
                </Footer>
                </Layout>
              </Layout>
            )
          } else {
            return <div>Loading</div>
          }
        }}
    />)
  }
}

ReactDOM.render(
  <Admin />,
  document.getElementById('app')
)
