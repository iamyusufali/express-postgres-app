# Express Postgres App

An app created using Express and Postgres.

### API Endpoints

### 1. Get list of all players

```
Method: GET
URL: https://express-postgres-app.herokuapp.com/players
```

> Response

```json
[
  {
    "id": 1,
    "name": "Cristiano Ronaldo",
    "club": "Juventus"
  },
  {
    "id": 2,
    "name": "Lionel Messi",
    "club": "Paris Saint German"
  }
]
```

### 2. Get player by id

```
Method: GET
URL: https://express-postgres-app.herokuapp.com/player/:id
```

> Response

```json
{
  "id": 1,
  "name": "Cristiano Ronaldo",
  "club": "Mancherster United"
}
```

### 3. Add a new player

```
Method: POST
URL: https://express-postgres-app.herokuapp.com/player
```

> Request Payload

```json
{
  "name": "Sadio Mane",
  "club": "Liverpool"
}
```

> Response

```
Sadio Mane has been added to records successfully.
```

### 4. Update player by id

```
Method: PUT
URL: https://express-postgres-app.herokuapp.com/player/:id
```

> Request Payload

```json
{
  "name": "Cristiano Ronaldo",
  "club": "Manchester United"
}
```

> Response

```
Player details updated successfully.
```

### 5. Delete player by id

```
Method: DELETE
URL: https://express-postgres-app.herokuapp.com/player/:id
```

> Response

```

Player with ID: :id deleted successfully.

```
