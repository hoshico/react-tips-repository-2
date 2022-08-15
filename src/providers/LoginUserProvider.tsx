import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { User } from '../types/api/user'

/* 
  contextを作成する 
  初期値はオブジェクト

*/
export type LoginUserContextType = {
  loginUser: LoginUser | null
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}
// Userという型に対してisAdminを追加
type LoginUser = User & { isAdmin: boolean };


export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode } ) => {
  const { children } = props;
  // 初期値がnull なら型にnullを含ませる
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
