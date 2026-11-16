import { useContext } from 'react'
import { AccountContext } from './context'

export const useAccount = () => useContext(AccountContext)
