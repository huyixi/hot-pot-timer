import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const restaurant = await prisma.restaurant.create({
  //   data: {
  //     name: "海底捞",
  //     dishes: {
  //       create: [{ name: "毛肚", description: "Some description", duration: 10 }],
  //     },
  //   },
  // });
  // console.log(restaurant);
  const restaurant = await prisma.restaurant.findMany();
  console.log(restaurant);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
