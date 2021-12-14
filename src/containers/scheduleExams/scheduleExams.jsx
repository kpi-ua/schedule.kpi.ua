import { GridWrapper, Header, WordAccent } from "./scheduleWrapper.style";
import SliceOptionsContext from "../../common/context/sliceOptionsContext";
import Exam from "../../components/examComponent";
import { useGroupContext } from "../../common/context/groupContext";
import { useEffect, useState } from "react";

const SchededuleExamsWrapper = ({ getData }) => {
  const [data, setData] = useState(null);

  const { group } = useGroupContext();
  
  useEffect(() => {
    const contextValue = group?.label;

    if (contextValue) {
      console.log(contextValue)
      getData(contextValue).then((res) => setData(res.data));
    } else {
      setData(null);
    }
  }, [group]);

  return (
    <div style={{ overflow: "hidden" }}>
      <GridWrapper>
        <SliceOptionsContext value={{}}>
          {data && (
            <>
              <Header>
                Розклад сесії для групи<WordAccent>{group.label}</WordAccent> на
                перший семестр{" "}
              </Header>
              {data && data.map((d) => <Exam data={d} />)}
            </>
          )}
        </SliceOptionsContext>
      </GridWrapper>
    </div>
  );
};

export default SchededuleExamsWrapper;
