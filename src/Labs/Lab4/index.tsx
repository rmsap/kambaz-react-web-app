import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div id="wd-lab4">
      <ClickEvent />
      <hr />
      <PassingDataOnEvent />
      <hr />
      <PassingFunctions theFunction={sayHello} />
      <hr />
      <EventObject />
      <hr />
      <Counter />
      <hr />
      <BooleanStateVariables />
      <hr />
      <StringStateVariables />
      <hr />
      <DateStateVariable />
      <hr />
      <ObjectStateVariable />
      <hr />
      <ArrayStateVariable />
      <hr />
      <ParentStateComponent />
      <hr />
      <ReduxExamples />
      <hr />
    </div>
  );
}
