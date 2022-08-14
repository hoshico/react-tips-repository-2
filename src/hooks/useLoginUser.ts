import { useContext } from 'react'

import {
  LoginUserContext,
  LoginUserContextType
} from '../providers/LoginUserProvider'

/*
  component側からuseLoginUserの値を参照することで
  contextの値を参照できるようになる
  useContextでLoginUserContextをセットしなくて良くなる
*/
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
