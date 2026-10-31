import { PrismaClient } from '../app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function seed() {
    await prisma.account.createMany({
        data: [
            { name: "Win Htet Lin", email: "winhtetlin@example.com", passwordHash: "$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy", studentId: "CCY001", studentTYpe: "Regular", phone: "09123456789", address: "Mayangone, Yangon, Myanmar" },
            { name: "Thoon Nay Toe", email: "thoonnaytoe@example.com", passwordHash: "$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy", studentId: "CCY002", studentTYpe: "Regular", phone: "09123456789", address: "Thanlyin, Yangon, Myanmar" },
            { name: "Shun Piti Thwin", email: "shunpitithwin@example.com", passwordHash: "$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy", studentId: "CCY003", studentTYpe: "Regular", phone: "09123456789", address: "Htauk Kyant, Yangon, Myanmar" }
        ]
    })
}

seed().then(() => prisma.$disconnect());