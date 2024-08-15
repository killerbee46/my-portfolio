import { Affix } from 'antd';
import Navbar from '../components/Navbar/Navbar';
import MyFooter from '../components/Footer/MyFooter';

const MainLayout = (props: any) => {
  // const isHomePage = window?.location?.pathname === "/"
  return (
    <div>
      <Affix>
      <Navbar />
      </Affix>
      <div style={{minHeight: 500 }}>
        {/* {
          isHomePage ? <HomepageBanner /> : <NavBanner />
        } */}
        {props?.banner}
        {props?.children}
      </div>
      <div>
        <MyFooter />
      </div>
    </div>
  );
};

export default MainLayout;