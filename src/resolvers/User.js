function messages(parent, args, context) {
  return context.prisma.user({ id: parent.id }).messages();
}

function connectedAt(parent, args, context) {
  return context.prisma.user({id: parent.id}).connectedAt();
}

module.exports = {
  messages,
  connectedAt,
}