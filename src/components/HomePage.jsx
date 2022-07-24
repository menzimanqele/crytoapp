import {React,useState} from 'react';
import millify from 'millify';
import { Typography,Row,Col,Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import  {Cryptocurrencies, News} from '../components';


const {Title} = Typography;
const HomePage = () => {

  const {data,isFetching} = useGetCryptosQuery(10); 
  const GlobalStats = data?.data?.stats;
  // const [coin, setCoin] = useState(coinData);
 if(isFetching) return 'Loading...';

  return (
    <>   
     <Title level={2} className="heading">Global Crypto Stats</Title>
     <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={GlobalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(GlobalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(GlobalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24Hr Volume" value={millify(GlobalStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(GlobalStats.totalMarkets)}/></Col>
     </Row>
     <div className='home-heading-container'>
      <Title level={2} className="home-title">Top 10 Cryptocurriencies in the world</Title>
      <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>     
     </div>
     <Cryptocurrencies simplified/>
     <div className='home-heading-container'>
      <Title level={2} className="home-title">Latest Crypto News</Title>
      <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>     
     </div>
     <News simplified/>
    </>

  )
}

export default HomePage