import { useSelector } from 'react-redux';
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

const Connector = () => {
  const [activePage, setActivePage] = useState(CurrentPage.BREAD);

  const selectorsByPage = {
    [CurrentPage.BREAD]: selectBreadData,
    [CurrentPage.CAKES]: selectCakesData,
    [CurrentPage.PIES]: selectPiesData,
    [CurrentPage.BUNS]: selectBunsData,
  };

  const data = useSelector(selectorsByPage[activePage]);

  return (
    <Controller
      activePage={activePage}
      setActivePage={setActivePage}
      data={data}
    />
  );
};

export default Connector;

// const selectorsByStepId = {
//   [StepInputs.BRAND]: selectBrands,
//   [StepInputs.MODEL]: selectModels,
//   [StepInputs.YEAR]: selectYears,
//   [StepInputs.ENGINE]: selectEngines,
// };

// const { isLoading, data } = useSelector(selectorsByStepId[inputStepId]);
