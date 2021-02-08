"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

const userArray = [
  {
    email: "demo@user.io",
    username: "Demo-lition",
    hashedPassword: bcrypt.hashSync("password"),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    role: "dog_owner",
  },
  {
    email: "onika@pink.com",
    username: "Barbie",
    hashedPassword: bcrypt.hashSync("password"),
    firstName: "Onika",
    lastName: "Minaj",
    phoneNumber: faker.phone.phoneNumber(),
    role: "dog_owner",
  },
  {
    email: "roman@zolanksi.com",
    username: "Roman",
    hashedPassword: bcrypt.hashSync("password"),
    firstName: "Roman",
    lastName: "Zolanksi",
    phoneNumber: faker.phone.phoneNumber(),
    role: "dog_owner",
  },
  {
    email: faker.internet.email(),
    username: "FakeUser1",
    hashedPassword: bcrypt.hashSync("password"),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    role: "dog_owner",
  },
  {
    email: faker.internet.email(),
    username: "FakeUser2",
    hashedPassword: bcrypt.hashSync("password"),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    role: "dog_owner",
  },
];

for (let i = 0; i < 800; i++) {
  userArray.push({
    email: faker.internet.email(),
    username: faker.internet.username(),
    hashedPassword: bcrypt.hashSync(faker.internet.password()),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    role: "dog_owner",
  });
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = await queryInterface.bulkInsert("Users", userArray, {
      returning: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Users");
  },
};
