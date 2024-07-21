import { Layout } from 'antd';
import Navbar from '../components/Navbar/Navbar';
import MyFooter from '../components/Footer/MyFooter';

const { Header, Content, Footer } = Layout;

const MainLayout = (props: any) => {

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', background:'black' }}>
        <Navbar />
      </Header>

      <Content style={{ minHeight: 500 }}>
        {props?.children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <MyFooter />
      </Footer>
    </Layout>
  );
};

export default MainLayout;