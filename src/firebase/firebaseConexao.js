import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  // Credenciais do seu projeto
}

const conexao = initializeApp(firebaseConfig)

const autenticacao = getAuth(conexao)
const bd = getFirestore(conexao)
const repositorio = getStorage(conexao)

export {autenticacao, bd, repositorio}
