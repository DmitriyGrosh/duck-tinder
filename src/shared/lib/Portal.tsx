import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  className?: string;
  el?: string;
}

const Portal: FC<IPortal> = ({
  el = 'div',
  className = 'portal',
  children,
}) => {
  const container = document.createElement(el);

  if (className) {
    container.classList.add(className);
  }

  useEffect(() => {
    document.body.appendChild(container);
    document.body.classList.add('hidden');

    return () => {
      document.body.removeChild(container);
      document.body.classList.remove('hidden');
    };
  }, []);

  return createPortal(children, container);
};

export default Portal;
