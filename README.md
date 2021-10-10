# Express Postgres App

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
    "club": "Mancherster United"
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

### 4. Update player by id
