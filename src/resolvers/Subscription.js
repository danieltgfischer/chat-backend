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
      mutation_in: ["CREATED"],
      node: {
        room: { id: args.roomId }
      }
    })
    .node();
}

function connectionDeleted(parent, args, context, info) {
  const selectionSet = `{ previousValues { id } }`;
  return context.prisma.$subscribe.connection({
      mutation_in: ["DELETED"],
      node: {
        room: { id: args.roomId }
      }
    },
    selectionSet
  )
}

const removeConnectionSubs = {
  subscribe: connectionDeleted,
  resolve: payload => {
    return payload ? payload.previousValues : payload;
  }
};

const newMessage = {
  subscribe: message,
  resolve: payload => {
    return payload;
  }
};

const newConnection = {
  subscribe: connection,
  resolve: payload => {
    return payload;
  }
};

module.exports = {
  newMessage,
  newConnection,
  removeConnectionSubs
};
