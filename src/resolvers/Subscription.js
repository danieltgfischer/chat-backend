function message(parent, args, context, info) {
  return context.prisma.$subscribe
    .message({
      mutation_in: ["CREATED"],
      node: {
        sended_in: {
          id: args.roomId
        }
      }
    })
    .node();
}

function connection(parent, args, context, info) {
  return context.prisma.$subscribe
    .connection({
      mutation_in: ['CREATED'],
      node: {
        room: { id: args.roomId }
      }
    })
    .node();
}

function deleteConnection(parent, args, context, info) {
  const selectionSet = `{ previousValues { user } }`  
  return context.prisma.$subscribe
    .connection({
      mutation_in: ['DELETED'],
      node: {
        room: { id: args.roomId }
      }
    })
    .node();
}

const newMessage = {
  subscribe: message,
  resolve: payload => payload,

};

const removeConnection = {
  subscribe: deleteConnection,
  resolve: payload => payload,
}

const newConnection = {
  subscribe: connection,
  resolve: payload => payload,
};

module.exports = {
  newMessage,
  newConnection,
  removeConnection,
};
