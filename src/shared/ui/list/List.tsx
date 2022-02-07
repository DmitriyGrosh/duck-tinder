import React, { FC, Children, cloneElement, isValidElement } from 'react';

import './List.scss';

interface IList {
  header: string;
}

interface IData {
  props: {
    className: string;
  };
}

const List: FC<IList> = ({ header, children }) => {
  // eslint-disable-next-line consistent-return
  const AddButton = Children.map(children, (child) => {
    if (isValidElement(child) && child.props.className === 'add') {
      return cloneElement(child);
    }
  });

  // eslint-disable-next-line consistent-return
  const EditButton = Children.map(children, (child) => {
    if (isValidElement(child) && child.props.className === 'edit') {
      return cloneElement(child);
    }
  });

  return (
    <div className="list">
      <div className="info">
        <span>{header}</span>
        {!!AddButton?.length && AddButton[0]}
      </div>
      {!!EditButton?.length && EditButton[0]}
    </div>
  );
};

export default List;
