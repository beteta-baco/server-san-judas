import User from '../src/users/user.model.js'

export const emailExits = async (email = '') =>{
    const existe = await User.findOne({email})


    if (existe){
    throw new Error('El email ya está registrado')
    }
}
    
    export const existePost = async (_id = '')=>{
        const existePost = await post.findOne({_id})

        if(!existe){
            throw new Error('El post ya está publicado')
        }
    }
