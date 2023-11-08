export const usuarios = [{
    "id": 0,
    "token": crypto.randomUUID(),
    "correo": "juan22@gmail.com",
    "password": "juan!123456789",
    "name": "Juan",
    "direccion":"cra 46b calle 10ASur #46-66"
}]

export const estilistas = [{
    "id": 0,
    "token": crypto.randomUUID(),
    "name": "Carla",
    "experiencia": "8 años de manicurista",
    "servicios": [{"pedicure":15000},{"manicure":18000},{"semipermanente":35000}],
    "disponible": true
}] 