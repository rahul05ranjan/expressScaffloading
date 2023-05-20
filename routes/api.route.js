const router = require('express').Router();
const PrismaClient = require("@prisma/client");

router.get('/', async (req, res, next) => {
  const prisma = new PrismaClient.PrismaClient()
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  console.log(user)
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
