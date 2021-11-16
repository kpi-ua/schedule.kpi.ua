import { useEffect, useState } from "react";
import Select from 'react-select';
import { Label } from './groupSearch.style';
import { useTheme } from 'styled-components';
import axios from "axios"
import { useGroupContext } from "../../common/context/groupContext";

const GroupSearch = () => {
  const theme = useTheme();
  const [groups, setGroups] = useState([]);
  const {setGroup} = useGroupContext();

  useEffect(()=>{
    loadGroups()
  }, [])

  const loadGroups = async ()=>{
    const res = await axios.get("https://167.172.103.72:5001/schedule/groups")
    const data = res.data.data;
    const groups = data.map(g=>({label : g.name, value :g.name }))
    setGroups(groups)
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
      <div style={{width: '150px'}}>
        <Select
          options={groups}
          styles={customStyles}
          isClearable={true}
          isSearchable={true}
          placeholder={null}
          name="color"
          onChange={g =>{
            if(!g){
              return setGroup("")
            }
            return setGroup(g.value)
          }}/>
      </div>
    </Label>
  );
};

export default GroupSearch;
