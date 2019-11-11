function connections(parent, args, context) {
  return context.prisma.room({id: parent.id}).connections();
}

function messages(parent, args, context) {
  return context.prisma.room({id: parent.id}).messages();
}

module.exports = {
  connections,
  messages,
}
