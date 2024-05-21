import React, { useEffect, useState } from "react";
import { Select } from "react-select-virtualized";

import { Label } from "./entitySearch.style";

import { useLecturerContext } from "@/common/context/lecturerContext";
import { useHistory, useLocation } from "react-router-dom";
import { usePreloadedListContext } from "@/common/context/preloadedListsContext";
import { useGroupContext } from "@/common/context/groupContext";
import { useTheme } from "styled-components";

import { prepareList } from "@/common/utils/apiTransformers";
import { routes } from "@/common/constants/routes";

import { getSelectCustomStyle } from "@/common/constants/selectOptions";
import "./entitySearch.scss";
import { getLocalStorageItem, setLocalStorageItem } from "@/common/utils/parsedLocalStorage";

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const EntitySearch: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const history = useHistory();

  const [options, setOptions] = useState<{label: string, value: string}[]>([]);
  const lecturerContextValue = useLecturerContext();
  
  const groupContextValue = useGroupContext();
  const lists = usePreloadedListContext();

  const isLecturer = location.pathname.includes(routes.LECTURER);
  const list = isLecturer ? lists?.lecturers : lists?.groups;

  const query = useQuery();

  useEffect(() => {
    if (isLecturer) {
      groupContextValue?.setGroup(null);
    } else {
      lecturerContextValue?.setLecturer(null);
    }
  }, [isLecturer]);

  useEffect(() => {
    if (isLecturer) {
      let lecturer = query.get("lecturerId");
      const localStorageLecturerId = getLocalStorageItem("lecturerId")
      if(!lecturer && localStorageLecturerId){
        lecturer = localStorageLecturerId
        history.replace("?lecturerId=" + localStorageLecturerId);
      }
      lecturerContextValue?.setLecturer(lecturer);
      groupContextValue?.setGroup(null);
    } else {
      let group = query.get("groupId");
      const localStorageLecturerId = getLocalStorageItem("groupId")
      if(!group && localStorageLecturerId){
        group = localStorageLecturerId
        history.replace("?groupId=" + localStorageLecturerId);
      }
      const groupObj = list?.find((g) => g.id === group);
      groupContextValue?.setGroup(groupObj);
      lecturerContextValue?.setLecturer(null);
    }
    setOptions(prepareList(list || []));
  }, [list, history, isLecturer, query]);

  const onOptionChange = (option: {value: string, label: string}) => {
    isLecturer ? lecturerContextValue?.setLecturer(option.value) : groupContextValue?.setGroup({ id : option.value, name : option.label });

    if (isLecturer) {
      history.push("?lecturerId=" + option.value);
      setLocalStorageItem("lecturerId", option.value)
    } else {
      history.push("?groupId=" + option.value);
      setLocalStorageItem("groupId", option.value)
    }
  };
  const initialValue =
    options.find((item: {value: string}) =>
      isLecturer ? item.value === lecturerContextValue?.lecturer : item.value === groupContextValue?.group?.id
    ) ?? null;
  return (
    <Label>
      Розклад занять для
      <div style={{ width: "200px" }}>
        <Select
          options={options}
          onChange={onOptionChange}
          styles={getSelectCustomStyle(theme)}
          value={initialValue}
          isSearchable={true}
          isClearable={false}
          placeholder={null}
          name="color"
        />
      </div>
    </Label>
  );
};

export default EntitySearch;
