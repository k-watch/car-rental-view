import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';

import Layout from '@src/components/common/Layout';
import Header from '@src/components/common/Header';
import { TITLE_TEXT } from '@src/types/enum';
import CarDetail from '@src/components/car/CarDetail';
import MetaTag from '@src/utils/common/MetaTag';
import { CarInterface } from '@src/types/api';
import { getCarList } from '@src/api/car';

export interface CarDetailProps {
  car: CarInterface | undefined;
}

const CarDetailPage = ({ car }: CarDetailProps) => {
  const router = useRouter();
  const { id: carId } = router.query;

  return (
    <>
      <MetaTag
        title={`${car?.attribute.brand} ${car?.attribute.name}`}
        description={`월 ${car?.amount} 원`}
        imgSrc={car?.attribute.imageUrl as string}
        url={`https://watch-carrental.netlify.app/detail/${carId}`}
      />
      <Layout>
        <Header title={TITLE_TEXT.DETAIL} isBack />
        <CarDetail car={car} />
      </Layout>
    </>
  );
};

export default CarDetailPage;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const carId = params?.id;
  const payload = (await getCarList()) as CarInterface[];
  const car = payload.filter((carInfo) => carInfo.id.toString() === carId);

  return {
    props: {
      car: car[0],
    },
  };
};
