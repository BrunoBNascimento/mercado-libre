import { useParams } from 'react-router-dom';
import DetailsCard from '../../components/details-card';
import Header from '../../components/header';
import useProductDetail from './use-product-detail';

type Params = {
  id: string;
};

const Details = () => {
  const { id } = useParams<Params>();
  const { item, loading } = useProductDetail(id);

  return (
    <>
      <Header />
      <DetailsCard product={item} loading={loading} />
    </>
  );
};

export default Details;
