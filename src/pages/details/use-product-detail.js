import { useEffect, useState } from 'react';
import Api from '../../commons/api/Api';

const useProductDetail = (id) => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const { data } = await Api.get(`/api/items/${id}`);

      setItem(data.item);
      setLoading(false);
    }

    fetch();
  }, [id]);

  return { item, loading };
};

export default useProductDetail;
