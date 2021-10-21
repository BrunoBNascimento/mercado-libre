import { useEffect, useState } from 'react';
import Api from '../../commons/api/Api';

const useProducts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetch() {
      const { data } = await Api.get('/api/items');

      setItems(data.items);
    }

    fetch();
  }, []);

  return items;
};

export default useProducts;
