async function users(parent, args, context, info) {
  const users = await context.prisma.users();

  return users;
}

async function user(parent, args, context) {
  const user = await context.prisma.user({ id: args.userId });

  return user;
}

async function rooms(parent, args, context){
  const rooms = await context.prisma.rooms();
  
  return rooms;
}

async function room(parent, args, context) {
  const room = await context.prisma.room({ id: args.roomId });

  return room;
}

module.exports = {
  users,
  user,
  rooms,
  room
};
