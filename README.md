# Entrega # 2 módulo Backend

📍 Deberán realizar una API que simule ser una app de gastos. La misma contará con la funcionalidad de guardar los gastos y datos de un usuario.
Además, debe permitir realizar post / get / getId sin necesidad de tener un JSON de manera local, sino que esté persistido en la DB ( Mongo Atlas ).

## Create new user

### POST /user

Body:

```json
{
  "userName": string ,
  "dni": number,
  "name": string,
  "mail": string
}
```

## Get all users

### GET /user

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
  "state": boolean
}
```

## Get spent by user

### GET /spent/{username}

## Get all spent

### GET /spent
