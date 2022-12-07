import MainLayout from '../components/layouts/MainLayout';
import { Heart } from 'phosphor-react';

const MainPage = () => {
  return (
    <MainLayout>
      <h1 className='text-3xl font-bold underline'>Hello, wasp!</h1>
      <Heart size={32} color='hotpink' weight='fill' />
    </MainLayout>
  );
};

export default MainPage;
