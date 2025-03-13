import { Button, Col, FormControl, ListGroup, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroup.Item>
      <Row>
        <Col>
          <FormControl
            value={todo.title}
            onChange={(e) =>
              dispatch(setTodo({ ...todo, title: e.target.value }))
            }
          />
        </Col>
        <Col>
          <Button
            className="btn btn-success m-1"
            onClick={() => dispatch(addTodo(todo))}
            id="wd-add-todo-click"
          >
            Add
          </Button>
          <Button
            className="btn btn-warning"
            onClick={() => dispatch(updateTodo(todo))}
            id="wd-update-todo-click"
          >
            Update
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
