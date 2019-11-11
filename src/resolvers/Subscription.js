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
      mutation_in: ["CREATED", "DELETE"],
      node: {
        room: { id: args.roomId }
      }
    })
    .node();
}

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
  newConnection
};
