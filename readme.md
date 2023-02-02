# HTTP Presentation
- A simple presentation about http for begginers on web basics and an introduction of REST architecture.
- Presentation in portuguese (pt-br): <a href="https://docs.google.com/presentation/d/e/2PACX-1vSM2lQmZfuX3dW86A4bg4sfPmZsIMLfgIp1K7qt-zAG6nYjszXcz049cfs0hGSherbZ1Joo4dPhzADG/pub?start=true&loop=false&delayms=60000" target="_blank" rel="noopener">Click</a>

## How to run:
- `nvm install 18`
- `nvm use`
- `npm run start`

## Curl to test endpoints
- get /users
```curl
curl --request GET \
  --url http://localhost:3000/users
```

- post /users
```curl
curl --request POST \
  --url http://localhost:3000/users \
  --header 'Content-Type: application/json' \
  --data '{
	"user": {
		"id": 4,
		"name": "Joaquina"
	}
}'
```

- put /users/id ( id 1 )
```curl
curl --request PUT \
  --url http://localhost:3000/users/1 \
  --header 'Content-Type: application/json' \
  --data '{
	"user": {
		"id": 1,
		"name": "Joao"
	}
}'
```

- delete /users/id ( id 1 )
```curl
curl --request DELETE \
  --url http://localhost:3000/users/1
```
