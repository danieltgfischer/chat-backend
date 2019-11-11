function sended_by(parent, args, context) {
  return context.prisma.message({ id: parent.id }).sended_by();

}

function sended_in(parent, args, context) {
  return context.prisma.message({id: parent.id}).sended_in();
}

module.exports = {
  sended_by,
  sended_in,
}
