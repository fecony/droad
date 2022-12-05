import Layout from '../components/Layout';
import { Heart } from 'phosphor-react';

const MainPage = () => {
  return (
    <Layout>
      <h1 className='text-3xl font-bold underline'>Hello, wasp!</h1>
      <Heart size={32} color='hotpink' weight='fill' />
    </Layout>
  );
};

export default MainPage;
