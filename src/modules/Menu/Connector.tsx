import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import Controller from './controller';
import { CurrentPage } from 'store/reducers/types';

import {
  selectBreadData,
  selectCakesData,
  selectPiesData,
  selectBunsData,
  selectTotalData,
} from 'store/reducers/selectors';
import { fetchAllBread } from 'store/reducers/actions';

const selectorsByPage = {
  [CurrentPage.BREAD]: selectBreadData,
  [CurrentPage.CAKES]: selectCakesData,
  [CurrentPage.PIES]: selectPiesData,
  [CurrentPage.BUNS]: selectBunsData,
};

const Connector: React.FC = () => {
  const [activePage, setActivePage] = useState(CurrentPage.BREAD);
  const dispatch = useDispatch();
  const fetchAllBreadsProducts = () => dispatch(fetchAllBread() as any)
  // useSelector // action -> useDispatch
  const data = useSelector(selectorsByPage[activePage]);

  return (
    <Controller
      fetchAllBreadsProducts={fetchAllBreadsProducts}
      activePage={activePage}
      setActivePage={setActivePage}
      data={data}
    />
  );
};

export default Connector;
