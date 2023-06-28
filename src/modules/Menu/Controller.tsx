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
import { OuterProps } from 'modules/MenuCategory/types';

type Props = StateProps 
type TA = {
  a: number,
  b: string,
}

type test = Pick<TA, 'a' | 'b'> // type test = {a: number, b: string}
type test1 = Omit<TA, 'a'> // type test = { b: string}
const Controller: React.FC<Props> = ({ data, setActivePage, activePage }) => {
  useEffect(() => {
    fetchAllBreadsProducts();
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
