import React, { useEffect, useState } from 'react';
import { onSnapshot, collection } from '@firebase/firestore';

import { db } from '../../firebase/firebase';

interface IColor {
  color: string;
  hex: number;
  isColor: boolean;
}

const Main = () => {
  const [colors, setColors] = useState<Array<IColor>>([]);

  useEffect(() => {
    onSnapshot(collection(db, 'colors'), (props) => {
      const values: IColor[] = props.docs.map((doc) => doc.data() as IColor);
      setColors(values);
    });
  }, []);

  console.log('==========>render');
  return (
    <div>
      Welcome
      <div>
        {colors.map(({ color, isColor, hex }) => {
          return (
            <div key={color}>
              {isColor ? (
                <div>
                  <p>Your color is {color}</p>
                  <p>Your hex is {hex}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
