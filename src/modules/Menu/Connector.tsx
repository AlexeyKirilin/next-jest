import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { selectorsByPage } from './constants';
import Controller from './controller';
import { CurrentPage } from 'store/reducers/types';

import {
  fetchAllBread,
  fetchAllCakes,
  fetchAllBuns,
  fetchAllPies,
} from 'store/reducers/actions';

const Connector: React.FC = () => {
  const [activePage, setActivePage] = useState(CurrentPage.BREAD);
  const dispatch = useDispatch();

  const data = useSelector(selectorsByPage[activePage]);

  const fetchAllBreadsProducts = () => dispatch(fetchAllBread());
  const fetchAllCakesProducts = () => dispatch(fetchAllCakes());
  const fetchAllBunsProducts = () => dispatch(fetchAllBuns());
  const fetchAllPiesProducts = () => dispatch(fetchAllPies());

  // useSelector // action -> useDispatch

  return (
    <Controller
      fetchAllBreadsProducts={fetchAllBreadsProducts}
      fetchAllCakesProducts={fetchAllCakesProducts}
      fetchAllBunsProducts={fetchAllBunsProducts}
      fetchAllPiesProducts={fetchAllPiesProducts}
      activePage={activePage}
      setActivePage={setActivePage}
      data={data}
    />
  );
};

export default Connector;
