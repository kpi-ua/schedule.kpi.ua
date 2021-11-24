import Select from 'react-select';
import { Label } from './entitySearch.style';
import { useTheme } from 'styled-components';
import { getAllLecturers } from '../../api/fullList';
import { useEffect, useState } from 'react';
import { prepareLecturerList } from '../../common/utils/apiTransformers';
import { useLecturerContext } from '../../common/context/lecturerContext';


const EntitySearch = () => {
  const theme = useTheme();
  const [lecturers, setLecturers] = useState([]);

  const {lecturer, setLecturer} = useLecturerContext();

  useEffect(() => {
    getAllLecturers().then(response => {
      setLecturers(prepareLecturerList(response.data));
    });
  }, [])

  const onOptionChange = option => {
    setLecturer(option);
  }

  const customStyles = {
    option(base) {
      return {
        ...base,
        color: theme['primaryFontColor'],
      };
    },
    menu(base) {
      return {
        ...base,
        backgroundColor: theme['bgOptions'],
        zIndex: 5,
      };
    },
    menuList(base) {
      return {
        ...base,
        backgroundColor: theme['bgOptions'],
      };
    },
    control(base) {
      return {
        ...base,
        backgroundColor: theme['bgOptions'],
        color: theme['primaryFontColor'],
        border: 'none',
      };
    },
    indicatorSeparator(base) {
      return {
        ...base,
        display: 'none'
      };
    },
    singleValue(base) {
      return {
        ...base,
        color: theme['primaryFontColor']
      };
    },
    input(base) {
      return {
        ...base,
        color: theme['primaryFontColor']
      };
    }
  };

  return (
    <Label alignItems="center" gap="15px">
      Розклад занять для
      <div style={{width: '200px'}}>
        <Select
          options={lecturers}
          onChange={onOptionChange}
          styles={customStyles}
          isClearable={true}
          isSearchable={true}
          defaultValue={lecturer}
          placeholder={null}
          name="color"/>
      </div>
    </Label>
  );
};

export default EntitySearch;
