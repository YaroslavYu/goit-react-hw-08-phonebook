import { useDispatch } from 'react-redux';

import { StyledFilter } from './Filter.styled';

// import { addFilter } from '../redux/filterSlice';
import { addFilter } from 'redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Filter
      <StyledFilter
        type="text"
        name="filter"
        onChange={e => {
          dispatch(addFilter(e.target.value));
        }}
      />
    </label>
  );
};
