'use client';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { signinUser } from '@/redux/slices/auth.slice';
import { BarLoader } from 'react-spinners';
import { refreshUser } from '@/services/api/auth.api';

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      const res = await refreshUser();
      console.log(res);
      dispatch(signinUser(res));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      loadUser();
    } else {
      setLoading(false);
    }
  }, [user, dispatch]);

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center ">
        {' '}
        <BarLoader color="#ca1611" />
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default AuthWrapper;
