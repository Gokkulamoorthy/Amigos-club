import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminPassword = await hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@amigos.com' },
    update: {},
    create: {
      email: 'admin@amigos.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
      status: 'ACTIVE',
      department: 'Computer Science',
      year: 3,
      specialization: 'AI/ML',
    },
  });

  // Create some regular members
  const member1Password = await hash('member123', 12);
  const member1 = await prisma.user.upsert({
    where: { email: 'member1@amigos.com' },
    update: {},
    create: {
      email: 'member1@amigos.com',
      name: 'John Doe',
      password: member1Password,
      role: 'MEMBER',
      status: 'ACTIVE',
      department: 'Computer Science',
      year: 2,
      specialization: 'Web Development',
    },
  });

  const member2Password = await hash('member123', 12);
  const member2 = await prisma.user.upsert({
    where: { email: 'member2@amigos.com' },
    update: {},
    create: {
      email: 'member2@amigos.com',
      name: 'Jane Smith',
      password: member2Password,
      role: 'MEMBER',
      status: 'ACTIVE',
      department: 'Computer Science',
      year: 3,
      specialization: 'Game Development',
    },
  });

  // Create some events
  const event1 = await prisma.event.create({
    data: {
      title: 'Gaming Tournament 2024',
      description: 'Annual gaming tournament featuring various games',
      startDate: new Date('2024-04-01'),
      endDate: new Date('2024-04-03'),
      location: 'Main Auditorium',
      status: 'UPCOMING',
      participants: {
        connect: [{ id: member1.id }, { id: member2.id }],
      },
    },
  });

  const event2 = await prisma.event.create({
    data: {
      title: 'Tech Workshop: AI in Gaming',
      description: 'Learn about implementing AI in game development',
      startDate: new Date('2024-04-15'),
      endDate: new Date('2024-04-15'),
      location: 'Lab 101',
      status: 'UPCOMING',
      participants: {
        connect: [{ id: member1.id }],
      },
    },
  });

  // Create some projects
  const project1 = await prisma.project.create({
    data: {
      title: 'AI Gaming Bot',
      description: 'Developing an AI-powered gaming bot',
      status: 'ONGOING',
      startDate: new Date('2024-03-01'),
      endDate: new Date('2024-06-30'),
      members: {
        connect: [{ id: admin.id }, { id: member1.id }],
      },
    },
  });

  const project2 = await prisma.project.create({
    data: {
      title: 'Virtual Reality Game',
      description: 'Creating a VR game for educational purposes',
      status: 'PLANNED',
      startDate: new Date('2024-05-01'),
      members: {
        connect: [{ id: admin.id }, { id: member2.id }],
      },
    },
  });

  // Create some activities
  await prisma.activity.createMany({
    data: [
      {
        type: 'MEMBER',
        action: 'New member registration',
        userId: member1.id,
      },
      {
        type: 'EVENT',
        action: 'Event created: Gaming Tournament 2024',
        userId: admin.id,
        eventId: event1.id,
      },
      {
        type: 'PROJECT',
        action: 'Project created: AI Gaming Bot',
        userId: admin.id,
        projectId: project1.id,
      },
    ],
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 