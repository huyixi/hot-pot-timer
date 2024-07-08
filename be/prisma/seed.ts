import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const hotPotRestaurant = await prisma.restaurant.create({
    data: {
      name: '海底捞',
      dishes: {
        create: [
          {
            name: '毛肚',
            description: '脆而不腻，入口即化',
            duration: 10,
          },
          {
            name: '千层肚',
            description: '层次分明，口感独特',
            duration: 20,
          },
          {
            name: '鲜虾滑',
            description: '鲜嫩滑爽，口感丰富',
            duration: 30,
          },
          {
            name: '羊肉卷',
            description: '肉质细嫩，香而不膻',
            duration: 15,
          },
        ],
      },
    },
  });

  console.log({ hotPotRestaurant });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
