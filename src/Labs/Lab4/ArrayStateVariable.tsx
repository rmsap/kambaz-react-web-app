import { useState } from "react";
import { Table } from "react-bootstrap";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button className="btn btn-success" onClick={addElement}>
        Add Element
      </button>
      <Table>
        <tbody>
          {array.map((item, index) => (
            <tr>
              <td>
                <strong>{item}</strong>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteElement(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
    </div>
  );
}
