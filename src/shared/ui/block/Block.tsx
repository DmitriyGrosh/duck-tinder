import React, { FC } from 'react';

import './Block.scss';

interface IBlock {
  title: string;
  content: string;
}

const Block: FC<IBlock> = ({ title, content }) => {
  return (
    <div className="block">
      <span className="block-title">{title}</span>
      <span className="block-content">{content}</span>
    </div>
  );
};

export default Block;
