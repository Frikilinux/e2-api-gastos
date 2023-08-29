# Entrega # 2 módulo Backend

📍 Deberán realizar una API que simule ser una app de gastos. La misma contará con la funcionalidad de guardar los gastos y datos de un usuario.
Además, debe permitir realizar post / get / getId sin necesidad de tener un JSON de manera local, sino que esté persistido en la DB ( Mongo Atlas ).

## Create new user

### POST /user

Body:

```json
{
  "userName": string (reuired, unique)
  "dni": number
  "name": string
  "mail": string (a valid email address)
}
```

## Get user by user name

### GET /user/:username

Response:

```json
// /user/obdulio78

{
  "_id": "64e803b67d29e33539859d08",
  "userName": "obdulio78",
  "dni": 25645855,
  "name": "Obdulio",
  "mail": "obdulio@gmail.com",
  "__v": 0,
  "state": true
}
```

## Get all users

### GET /user

---

## Create new spent

### POST /spent

Body:

```json
{
  "user": valid user name
  "category": string
  "price": number
  "product": string
  "description": string
}
```

## Get spent by user

### GET /spent/:user

## Get all spent

### GET /spent
