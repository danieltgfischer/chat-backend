function user(parent, args, context) {
  return context.prisma.connection({ id: parent.id }).user();
}

function room(parent, args, context) {
  return context.prisma.connection({ id: parent.id }).room();
}

module.exports = {
  room,
  user
};
