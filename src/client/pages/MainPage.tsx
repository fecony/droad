import MainLayout from '../components/layouts/MainLayout';
import { Heart } from 'phosphor-react';

const MainPage = () => {
  return (
    <MainLayout>
      <h1 className='text-3xl font-bold underline'>Hello, wasp!</h1>
      <Heart size={32} color='hotpink' weight='fill' />
      <button className='bg-tomato-9 p-4 py-2 rounded-full text-gray-12'>
        Button
      </button>
    </MainLayout>
  );
};

export default MainPage;
