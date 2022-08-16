import axios from 'axios'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../types/api/user'
import { useMessage } from './useMessage'
import { useLoginUser } from '../hooks/useLoginUser'
import { LoginUser } from '../providers/LoginUserProvider'

export const useAuth = () => {
  const navigation = useNavigate()
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()

  const [loading, setLoading] = useState(false)
  const login = useCallback(
    (id: string) => {
      setLoading(true)
      /* 
      正常に取得できたら"/home"に遷移
      それ以外はエラーを表示させる  
    */
      axios
        .get<LoginUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            /*
              データを取得した際にidを元にloginUserも設定する
              idが10なら
              isAdminはtrue
              それ以外はfalse
            */
            // isAdminというプロパティにisAdiminを再設定
            setLoginUser({...res.data, isAdmin})
            showMessage({ title: 'ログインしました', status: 'success' })
            navigation('/home')
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' })
            alert('ユーザーが見つかりません')
            setLoading(false)
          }
        })
        .catch(() =>
          showMessage({ title: 'ログインできません', status: 'error' })
        )
        .finally(() => setLoading(false))
    },
    [navigation, showMessage, setLoginUser]
  )
  return { login, loading }
}
