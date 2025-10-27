import { Identidad, users, type DatoUsers } from "./data/users.data";

const getUSer = (user:DatoUsers[],Iden:Identidad) => {
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (Iden === '') {
                return resolve(user)
            }else{
                reject("Usuario no encontrado con ese documento");
            }
        }, 2000);
    });
}
