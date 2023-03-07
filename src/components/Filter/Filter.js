import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterWrap } from './Filter.styled';
import {
  InputLabel,
  InputField,
} from 'components/ContactForm/ContactForm.styled';

const Filter = ({ filterQuery }) => {
  const filterId = useMemo(() => nanoid(4), []);

  const handleChange = e => {
    const { value } = e.target;

    filterQuery(value.trim().toLowerCase());
  };

  return (
    <FilterWrap>
      <InputLabel htmlFor={filterId}>Find your contacts by name</InputLabel>
      <InputField
        type="text"
        name="filter"
        autoComplete="off"
        title="Find your contacts by name"
        id={filterId}
        onChange={handleChange}
      />
    </FilterWrap>
  );
};

Filter.propTypes = {
  filterQuery: PropTypes.func.isRequired,
};

export default Filter;
