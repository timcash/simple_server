README.md

# Send data to server with curl
```
curl -X POST localhost:8080 \
   -H 'Content-Type: application/json' \
   -d '{"login":"my_login","password":"my_password"}'
```