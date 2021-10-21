import { useEffect, useState } from 'react';
import Api from '../../commons/api/Api';
import { useCategories } from '../../commons/hooks/use-categories';

const useProducts = (name) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setCategories: setCategoriesInContext } = useCategories();

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const { data } = await Api.get('/api/items', { params: { name } });

      setItems(data.items);
      setCategories(data.categories);
      setCategoriesInContext(data.categories);
      setLoading(false);
    }

    if (name) fetch();
  }, [name]);

  return { items, loading, categories };
};

export default useProducts;
