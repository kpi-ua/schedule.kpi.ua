import { ExamsListWrapper, Header, WordAccent } from "./scheduleWrapper.style";
import { useEffect, useState } from "react";

import { Exam } from '../../models/Exam';
import ExamSchedule from "../../components/examSchedule";
import { GridWrapper } from '../scheduleWrapper/scheduleWrapper.style';
import { getExamsByGroup } from '../../api/schedule';
import { useGroupContext } from "../../common/context/groupContext";
import { useWeekContext } from "../../common/context/weekContext";

const SchededuleExamsWrapper = () => {
  const [exams, setExams] = useState<Exam[]>([]);

  const groupContext = useGroupContext();
  const weekContext = useWeekContext();

  const groupId = groupContext?.item?.id;

  useEffect(() => {
    if (groupId) {
      getExamsByGroup(groupId).then((res) => setExams(res.data));
    } else {
      setExams([]);
    }
  }, [groupId]);

  return (
    <GridWrapper>
      <Header>
          Розклад сесії для групи&nbsp;<WordAccent>{groupContext.item?.name}</WordAccent>
          <br />
          на&nbsp;
          <WordAccent>
            {weekContext?.currentWeek === "firstWeek"
              ? "перший семестр"
              : "другий семестр"}
          </WordAccent>
      </Header>
      <ExamsListWrapper>
        {exams.map((exam) => (
          <ExamSchedule key={exam.id} exam={exam} />
        ))}
      </ExamsListWrapper>
    </GridWrapper>
  );
};

export default SchededuleExamsWrapper;
