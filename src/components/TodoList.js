import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

// components
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default function TodoList(props) {
  const todos = useTodoState();
  return (
    <React.Fragment>
      <TodoListBlock>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
        ))}
      </TodoListBlock>
    </React.Fragment>
  );
}
