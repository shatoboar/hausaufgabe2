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
Database is accessible at _**localhost:8086**_.

## API
### Get Request: 

_**localhost:8086/getTodos**_ <br /><br />
_*Returns all todos.*_

### Post Request: 

_**localhost:8086/addTodo**_ <br /><br />
with RequestBody with jsonstructure like following: 
```
{
  "description": "__",
  "progress": int,
  "done": boolean
}
```
_*Returns updated list of all Todos.*_

### Delete Request:

_**localhost:8086/deleteTodo**_ <br /><br />
With same RequestBody like mentioned above. <br/>
_Returns String "deleted." if successful._
