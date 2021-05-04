# Todolist Backend
Prerequisites: 
Docker (https://docs.docker.com/engine/install/linux-postinstall/)

## how to run
```
chmod +x run.sh 
chmod +x mvnw
./run.sh
```
## access
Database is accessible at localhost:8086.

## API
Get Request -> localhost:8086/getTodos
returns all todos

Post Request -> localhost:8086/addTodo
with RequestBody with jsonstructure like following: 
```
{
  "description": "__",
  "progress": int,
  "done": boolean
}
```
returns updated list of all Todos.
