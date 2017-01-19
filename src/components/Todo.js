import React, {PropTypes} from 'react';

const Todo = ({onClick, onDelete, completed, text}) => (
  <li>
    <span
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        paddingRight: '20px'
      }}
      onClick={onClick}
    >
      {text}
    </span>
    <a href="#" onClick={e => {
      e.preventDefault();
      onDelete();
    }}>
      Slett
    </a>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
