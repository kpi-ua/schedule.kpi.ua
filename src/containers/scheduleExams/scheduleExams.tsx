import { GridWrapper, Header, WordAccent } from "./scheduleWrapper.style";
import Exam from "../../components/examComponent";
import { useGroupContext } from "../../common/context/groupContext";
import { useWeekContext } from "../../common/context/weekContext";
import React, { useEffect, useState } from "react";

interface Props {
  getData: (id: string) => Promise<any>;
  contextType?: string;
}

const SchededuleExamsWrapper: React.FC<Props> = ({ getData }) => {
  const [data, setData] = useState([]);

  const groupContext = useGroupContext();
  const weekContext = useWeekContext();

  const groupId = groupContext?.group?.id;

  useEffect(() => {
    if (groupId) {
      getData(groupId).then((res) => setData(res.data));
    } else {
      setData([]);
    }
  }, [getData, groupId]);

  return data ? (
    <div style={{ overflow: "hidden" }}>
      <GridWrapper>
        <Header>
          Розклад сесії для групи{" "}
          <WordAccent>{groupContext.group?.name}</WordAccent>
          <br />
          на{" "}
          <WordAccent>
            {weekContext?.currentWeek === "firstWeek"
              ? "перший семестр"
              : "другий семестр"}
          </WordAccent>
        </Header>
        {data.map((d, idx) => (
          <Exam key={idx} data={d} />
        ))}
      </GridWrapper>
    </div>
  ) : null;
};

export default SchededuleExamsWrapper;
