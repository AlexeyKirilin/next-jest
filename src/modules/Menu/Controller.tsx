import { useEffect } from 'react';

import { InnerProps } from './types';

import View from './view';

const Controller: React.FC<InnerProps> = ({
  data,
  setActivePage,
  activePage,
  fetchAllBreadsProducts,
  fetchAllCakesProducts,
  fetchAllBunsProducts,
  fetchAllPiesProducts,
}) => {
  useEffect(() => {
    fetchAllBreadsProducts();
    fetchAllCakesProducts();
    fetchAllBunsProducts();
    fetchAllPiesProducts();
  }, []);

  return (
    <View data={data} activePage={activePage} setActivePage={setActivePage} />
  );
};

export default Controller;
