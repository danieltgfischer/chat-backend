function user(parent, args, context, info) {
  return context.prisma.createUser({
    name: args.name
  });
}

function room(parent, args, context) {
  return context.prisma.createRoom({ name: args.name });
}

async function connection(parent, args, context) {
  const connectionExists = await context.prisma.$exists.connection({
    user: { id: args.userId },
    room: { id: args.roomId }
  });

  if (connectionExists) {
    throw new Error(`User already connected in room: ${args.roomId}`);
  }

  return context.prisma.createConnection({
    user: { connect: { id: args.userId } },
    room: { connect: { id: args.roomId } }
  });
}

async function removeConnection(parent, args, context) {
  return await context.prisma
    .deleteConnection({ id: args.connectionId })
}

function message(parent, args, context) {
  return context.prisma.createMessage({
    message: args.message,
    sended_by: { connect: { id: args.sended_by } },
    sended_in: { connect: { id: args.sended_in } }
  });
}

module.exports = {
  user,
  room,
  connection,
  removeConnection,
  message
};
