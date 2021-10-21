import React, { ReactNode, useContext, useState } from 'react';

const CategoriesContext = React.createContext<{
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}>({ categories: [''], setCategories: () => [''] });

type Props = {
  children: ReactNode;
};

export const Provider = (props: Props) => {
  const { children } = props;

  const [categories, setCategories] = useState(['']);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoriesContext);

  return context;
};
