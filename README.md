**Atenção**: Atualmente esse aplicativo está em construção e poderá ocorrer alterações.

# Chat GraphQL
Esse projeto é um aplicativo que cria salas de chat. É possível criar salas, <br/>
bem como usuários e interagir entre usuários nas salas de bate papo.
 
## Motivação
 Eu sempre fui apaixonado pelo real time :fire:. GraphQL é uma tecnologia que eu tinha muito interesse em aprender :sunglasses:<br/>
 e após saber das ferramentas poderosas que vinham com GraphQL - junto a elas **real time**  :fire: - decidi fazer um chat para aprender
 essa ferramenta fantástica. :rocket:

## Instalação
  **Atenção**: 
  * É preciso ter instalado [docker](https://docs.docker.com/v17.09/engine/installation/) e [docker-compose](https://docs.docker.com/compose/install/)
  * Também instalar a ferramenta [prisma](https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/)
#### Para a instalação faça o clone do projeto e instale:
  * `git clone git@github.com:danieltgfischer/chat-backend.git`<br/>
  * `cd chat-backend/prisma`
  * `sudo docker-compose up -d`
  * `cd .. && yarn && yarn dev`
  * Com o servidor rodando rode na pasta raiz `prisma deploy`. <br/>Caso os modelos não sejam criados rode `prisma deploy --force`

## Documentação
 No navegador acesse `http://localhost:4000/`.
 * Crie uma sala:
```javascript
mutation {
  room(name:"Winterfell"){
    id
    connections{
      id
    	user {
        name
      }
    }
    messages{
      message
    }
  }
}
```
 * Crie um usuário:
```javascript
  mutation{
    user(name:"John Snow"){
      id
    }
  }
```
 * Crie uma conexão:
```javascript
 mutation {
  connection(
    roomId: /id da sala criada/, 
    userId: /id do usuário criado/){
    id
  }
}
```
* Envie uma mensagem:
```javascript
mutation{
  message(
  sended_in: /id sala da conexao/
  sended_by: /id do usuario conectado /
  message:"Era pra eu ter sido rei!") {
    id
  }
}
```
* Observe as mensagens enviadas:
```javascript
subscription{
  newMessage(roomId: /id sala que quer observar novas mensagens/){
    message
    sended_by {
      id
      name
    }
  }
}
```
* Busque uma sala especifica:
```javascript
{
room(roomId: /id da sala/){
    name
    id
    connections{
      id
      user { name }
    }
  }
}
```
* Busque todas as salas:
```javascript
{
rooms{
    name
    id
    connections{
      id
      user { name }
    }
    messages {
      id
      message
      sended_by {
      name
      id
  }
}
```
