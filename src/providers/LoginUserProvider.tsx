import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { User } from '../types/api/user'

/* 
  contextを作成する 
  初期値はオブジェクト

*/
type LoginUserContextType = {
  loginUser: User | null
  setLoginUser: Dispatch<SetStateAction<User | null>>
}
const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode } ) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
