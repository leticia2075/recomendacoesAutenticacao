import estilos from './Perfil.module.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const perfilSchema = z.object({

    nome: z.string()
           .min(2, 'Informe um nome!')
           .max(25, 'Máximo de 25 caracteres!'),
    
    email: z.string()
            .email({message: 'Informe um e-mail válido!'}),

    senha: z.string()
            .length(6, {message: 'Defina uma senha com 6 caracteres!'}) 
})

export function Perfil() {

    const { 
        register, handleSubmit, formState: {errors}
    } = useForm({
        resolver: zodResolver(perfilSchema)
    })

    function alterarPerfil(data){

        console.log(data)
    }


    return (
        <main className={estilos.conteiner}>

            <p className={estilos.titulo}>Perfil</p>

            <form 
                className={estilos.formulario}
                onSubmit={handleSubmit(alterarPerfil)}
            >
                <input
                    {...register('nome')} 
                    className={estilos.campo}
                    placeholder='Nome' 
                />
                {errors.nome && (
                    <p className={estilos.mensagem}>{errors.nome.message}</p>   
                )}

                <input 
                    className={estilos.campo}
                    placeholder='E-mail'
                    {...register('email')} 
                />
                {errors.email && (
                    <p className={estilos.mensagem}>{errors.email.message}</p>   
                )}

                <input 
                    className={estilos.campo}
                    placeholder='Senha'
                    {...register('senha')}
                />
                {errors.senha && (
                    <p className={estilos.mensagem}>{errors.senha.message}</p>   
                )}

                <button 
                    className={estilos.botao}
                >Alterar</button>
                
            </form>

        </main>
        )
}
