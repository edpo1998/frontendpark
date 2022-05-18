// Componenete para el Acceso no autorizado
import Unauthorized from "../containers/Unauthorized";

// Componente para sustituir el Home por el Login
import Home from "../containers/Home";

// Autenticacion para verificar una sesion activa
const authUser = ()=>{   
    if(localStorage.getItem("session")){
        const session_active = JSON.parse(localStorage['session']);
        if(session_active){
            return session_active
        }else{
            return false
        }
    }
    return false
}

// Verifica el usuario logueado para poder sustituir el componente por la bienvenida al modulo
export const isLogged = (component)=>{
    const usersession = authUser()
    if(usersession){
        return Home
    }else{
        return component
    }
}

// Verifica que el rol permita el acceso al modulo
export const verifyRol = (role,component) =>{
    const usersession = authUser()
    const is_correct = role.some(arrVal => usersession.rol == arrVal)
    if(is_correct){
        return component
    }else{
        return Unauthorized
    }
}