import React, { FC } from 'react';

interface IChatLine {
  name: string;
  image?: string | null;
}

const ChatLine: FC<IChatLine> = ({ name, image }) => {
  return (
    <div className="chat-line">
      {image && <img src={image} alt="logo" />}
      {name}
    </div>
  );
};

ChatLine.displayName = 'ChatLine';

export default ChatLine;
