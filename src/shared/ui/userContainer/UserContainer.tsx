import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  Fragment,
} from 'react';

import './UserContainer.scss';

interface IUserContainer {
  line: boolean;
  className?: string;
}

const UserContainer: FC<IUserContainer> = ({ children, line, className }) => {
  const Header: Array<JSX.Element> = [];
  const Body: Array<JSX.Element> = [];
  // eslint-disable-next-line consistent-return
  Children.forEach(children, (child, index) => {
    if (isValidElement(child)) {
      // @ts-ignore
      if (child.type.name === 'List') {
        Header.push(cloneElement(child));
      } else {
        const element = (
          <Fragment key={index.toString(36)}>{cloneElement(child)}</Fragment>
        );
        Body.push(element);
      }
    }
  });

  return (
    <div
      className={className ? `user-container ${className}` : 'user-container'}
    >
      <div className="header-user-container">
        {!!Header.length && Header[0]}
      </div>
      {line && <div className="line" />}
      <div className="content">{!!Body.length && Body}</div>
    </div>
  );
};

export default UserContainer;
