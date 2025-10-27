import { Identidad, users, type DatoUsers } from "./data/users.data";

const getUSer = (user: DatoUsers[], Iden: Identidad) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Iden === Identidad.CC) {
        resolve(user);
      } else {
        reject("Usuario no encontrado con ese documento");
      }
    }, 2000);
  });

  return promesa
    .then((user) => {
      return `El usuario si existe con ese documento: ${JSON.stringify(user)}`;
    })
    .catch((error) => {
      return `${error}, el usuario no existe con ese documento`;
    })
    .finally(() => {
      console.log("Deseas registrar el usuario?");
    });
};

getUSer(users, Identidad.TI)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));


