import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { StateProps } from './types';
import {
  fetchAllBread,
  fetchAllCakes,
  fetchAllPies,
  fetchAllBuns,
  getTotal,
} from 'store/reducers/actions';

import View from './view';

type Props = StateProps;

const Controller: React.FC<Props> = ({ data, setActivePage, activePage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBread());
    // dispatch(fetchAllCakes());
    // dispatch(fetchAllPies());
    // dispatch(fetchAllBuns());
    // dispatch(getTotal());
  }, []);

  return (
    <View data={data} activePage={activePage} setActivePage={setActivePage} />
  );
};

export default Controller;
