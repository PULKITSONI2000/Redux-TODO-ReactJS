import React, { useState } from "react";
import {
  Container,
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";

// redux
import { connect } from "react-redux";
import { addTodo } from "../action/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Please add a todo");
    }

    const todo = {
      title,
      id: v4(),
    };
    addTodo(todo);

    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="primary" onClick={handleSubmit}>
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({});
// central state to prop of this function // basically when using this then our component think the state is our prop

const mapDispatchToProps = (dispatch) => ({
  // sent data to central state
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
