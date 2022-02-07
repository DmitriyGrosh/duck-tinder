import React, { FC, useEffect, useState } from 'react';
import { collection, where, query, getDocs } from '@firebase/firestore';
import ChatLine from '../../shared/ui/chatLine';

import { db } from '../../firebase/firebase';
import { useAppSelector } from '../../redux/hooks';

import './Sidebar.scss';

interface IUserAccounts {
  name: string;
  email: string;
  id: string;
  image: string | null;
}

const Sidebar: FC = () => {
  const [userAccounts, setUserAccounts] = useState<IUserAccounts[]>();
  const uid = useAppSelector((state) => state.user.id);

  const getInitialData = async () => {
    const users: IUserAccounts[] = [];
    const usersQuery = query(collection(db, 'users'), where('id', '!=', uid));
    const usersFirestore = await getDocs(usersQuery);
    usersFirestore.forEach((doc) => {
      users.push(doc.data() as IUserAccounts);
    });

    setUserAccounts(users);
  };

  useEffect(() => {
    getInitialData();
  }, []);
  return (
    <div className="sidebar">
      {userAccounts?.map((el, index) => {
        return (
          <ChatLine key={index.toString(36)} name={el.name} image={el.image} />
        );
      })}
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
