import { CurrentPage } from 'store/reducers/types';
import {
  selectBreadData,
  selectCakesData,
  selectBunsData,
  selectPiesData,
  } from 'store/reducers/selectors';

const selectorsByPage = {
  [CurrentPage.BREAD]: selectBreadData,
  [CurrentPage.CAKES]: selectCakesData,
  [CurrentPage.BUNS]: selectBunsData,
  [CurrentPage.PIES]: selectPiesData,
};

export { selectorsByPage }