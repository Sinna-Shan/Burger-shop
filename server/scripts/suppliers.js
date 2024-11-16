const Supplier = require("../models/supplier");
const supplier = [
  {
    name: "John Doe",
    contact: "0774567923",
    email: "john.doe@email.com",
  },
  {
    name: "Jane Smith",
    contact: "0771234567",
    email: "jane.smith@email.com",
  },
  {
    name: "Michael Brown",
    contact: "0779876543",
    email: "michael.brown@email.com",
  },
  {
    name: "Emily Johnson",
    contact: "0776543210",
    email: "emily.johnson@email.com",
  },
  {
    name: "David Wilson",
    contact: "0771122334",
    email: "david.wilson@email.com",
  },
  {
    name: "Sarah Davis",
    contact: "0779988776",
    email: "sarah.davis@email.com",
  },
  {
    name: "Christopher Miller",
    contact: "0772233445",
    email: "chris.miller@email.com",
  },
  {
    name: "Laura Taylor",
    contact: "0773344556",
    email: "laura.taylor@email.com",
  },
  {
    name: "Daniel Anderson",
    contact: "0774455667",
    email: "daniel.anderson@email.com",
  },
  {
    name: "Olivia Thomas",
    contact: "0775566778",
    email: "olivia.thomas@email.com",
  },
  {
    name: "James Moore",
    contact: "0776677889",
    email: "james.moore@email.com",
  },
  {
    name: "Sophia Martinez",
    contact: "0777788990",
    email: "sophia.martinez@email.com",
  },
  {
    name: "William Garcia",
    contact: "0778899001",
    email: "william.garcia@email.com",
  },
  {
    name: "Isabella Harris",
    contact: "0779900112",
    email: "isabella.harris@email.com",
  },
  {
    name: "Benjamin Clark",
    contact: "0771010101",
    email: "benjamin.clark@email.com",
  },
];

(async () => {
  await Supplier.destroy({ where: {}, cascade: true });
  await Supplier.bulkCreate(supplier);
})();
