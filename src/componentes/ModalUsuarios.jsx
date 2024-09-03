import estilos from './ModalUsuarios.module.css'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useState } from 'react'

const perfilSchema = z.object({

    nome: z.string()
           .min(2, 'Informe um nome!')
           .max(25, 'Máximo de 25 caracteres!'),
    
    email: z.string()
            .email({message: 'Informe um e-mail válido!'}),

    senha: z.string()
            .length(6, {message: 'Defina uma senha com 6 caracteres!'}) 
})

export function ModalUsuarios({exibir, ocultar, titulo, usuario, pagina = ''}) {

    const {register, handleSubmit, setValue, formState: {errors}
    } = useForm({
        resolver: zodResolver(perfilSchema)
    })

    function adicionarUsuario(){

    }

    if (exibir) {

        return(

            <div className={estilos.conteiner}
                 style={{backgroundColor: `${ pagina == 'login' ? '#1f0322' : null }` }}
            >
                <p className={estilos.titulo}
                   style={{color: `${ pagina == 'login' ? '#f5f5f5' : null }` }}
                >{titulo}</p>

                <form className={estilos.formulario}> 

                    <input 
                        {...register('nome')}
                        {...setValue('nome', usuario.nome)}
                        className={estilos.campo}
                        placeholder='Nome' 
                        
                    />
                    {errors.nome && (
                        <p className={estilos.mensagem}>
                            {errors.nome.message}
                        </p>
                    )}

                    <input 
                        {...register('email')}
                        {...setValue('email', usuario.email)}
                        className={estilos.campo}
                        placeholder='E-mail' 
                    />
                    {errors.email && (
                        <p className={estilos.mensagem}>
                            {errors.email.message}
                        </p>
                    )}

                    <input 
                        {...register('senha')}
                        {...setValue('senha', usuario.senha)}
                        className={estilos.campo}
                        placeholder='Senha' 
                    />                   
                    {errors.senha && (
                        <p className={estilos.mensagem}>
                            {errors.senha.message}
                        </p>
                    )}

                    <button
                        className={estilos.botao}
                        onClick={handleSubmit(adicionarUsuario)}
                    >Confirmar</button>

                    <button
                        className={estilos.botao}                    
                        onClick={() => ocultar()}
                    >Cancelar</button>                    
                </form>

            </div>
        )    
    }
}