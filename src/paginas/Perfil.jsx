import estilos from './Perfil.module.css'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schemaPerfil = z.object({
    nome: z.string()
    .min(1, 'Informe um nome')
    .max(25, 'Máximo de 25 caracteres'),

    usuario: z.string()
    .min(5, 'Mínimo de 5 caracteres')
    .max(10, 'Máximo de 10 caracteres'),

    senha: z.string()
    .min(8, 'Informe uma senha de 8 caracteres')
    .max(8, 'Máximo de 8 caracteres')
})


export function Perfil(){

    const { 
        register, 
        handleSubmit,
        formState: {errors} 
    } = useForm({
        resolver: zodResolver(schemaPerfil)
    })

    function obterDadosFormulario(data){
        console.log(`Nome: ${data.nome}`)
        console.log(`Usuário: ${data.usuario}`)
        console.log(`Senha: ${data.senha}`)
    }

    return(
        <div className={estilos.conteiner}>

            <form 
                className={estilos.formulario}
                onSubmit={handleSubmit(obterDadosFormulario)}
            >

                <input 
                    {...register('nome')}
                    className={estilos.campo}
                    placeholder="Name"                 
                />
                {errors.nome && (
                    <p className={estilos.mensagem}>{errors.nome.message}</p>
                )}

                <input 
                    {...register('usuario')}
                    className={estilos.campo}
                    placeholder="User"                 
                />
                {errors.nome && (
                    <p className={estilos.mensagem}>{errors.usuario.message}</p>
                )}

                <input 
                    {...register('senha')}
                    className={estilos.campo} 
                    placeholder="Password" 
                />
                {errors.nome && (
                    <p className={estilos.mensagem}>{errors.senha.message}</p>
                )}


                <button className={estilos.botao}> Entrar </button>
            </form>
        </div>
    )
}