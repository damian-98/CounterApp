import { useState, useEffect } from "react";
import Title from "./Title";
import Wrapper from "./Wrapper";
import AddButton from "./AddButton";
import SubtractButton from "./SubtractButton";
import AppColor from "./AppColor";
import AppPostion from "./AppPostion";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  return (
    <AppPostion>
      <AppColor />
      <Wrapper>
        <Title>Count:{count}</Title>
        <AddButton onClick={add} id="add">
          Add
        </AddButton>
        <SubtractButton onClick={subtract} id="subtract">
          subtract
        </SubtractButton>{" "}
      </Wrapper>{" "}
    </AppPostion>
  );
}

export default App;
