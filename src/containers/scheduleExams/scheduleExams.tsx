import { useEffect, useState } from "react";
import { GridWrapper, Header, WordAccent } from "./scheduleWrapper.style";
import ExamSchedule from "../../components/examSchedule";
import { useGroupContext } from "../../common/context/groupContext";
import { useWeekContext } from "../../common/context/weekContext";
import { Exam } from '../../models/Exam';
import { getExamsByGroup } from '../../api/schedule';

const SchededuleExamsWrapper = () => {
  const [exams, setExams] = useState<Exam[]>([]);

  const groupContext = useGroupContext();
  const weekContext = useWeekContext();

  const groupId = groupContext?.group?.id;

  useEffect(() => {
    if (groupId) {
      getExamsByGroup(groupId).then((res) => setExams(res.data));
    } else {
      setExams([]);
    }
  }, [groupId]);

  return (
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
        {exams.map((exam) => (
          <ExamSchedule key={exam.id} exam={exam} />
        ))}
      </GridWrapper>
    </div>
  );
};

export default SchededuleExamsWrapper;
