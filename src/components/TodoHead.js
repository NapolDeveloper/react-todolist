import React from 'react';
import styled from 'styled-components';

import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  // 아래 클래스, 셀렉터는 하나의 컴포넌트로 만들어서 추가해주어도 됨
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

export default function TodoHead(props) {
  const todos = useTodoState();
  // filter함수를 이용하여 todo.done이 false인 값을 받아와 새로운 배열로 반환해줌
  // 즉 남은 todo를 undoneTasks 배열 형태로 전달
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <React.Fragment>
      <TodoHeadBlock>
        <h1>{dateString}</h1>
        {/* class 네임 부분 classnames 라이브러리로 추후 수정 */}
        <div className='day'>{dayName}</div>
        <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
      </TodoHeadBlock>
    </React.Fragment>
  );
}
