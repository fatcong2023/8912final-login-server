const sql = require("mssql");
const dbConfig = require("./dbConfig");

const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log("Connected to the database.");
    return pool;
  })
  .catch(err => console.error("Database Connection Failed!", err));

const createUser = async (firstName, lastName, phoneNumber, email, userName) => {
  const pool = await poolPromise;
  const query = `
    INSERT INTO Users (firstName, lastName, userName, phoneNumber, email)
    VALUES (@firstName, @lastName, @userName, @phoneNumber, @Email);
  `;
  const request = pool.request();
  request.input("firstName", sql.NVarChar, firstName);
  request.input("lastName", sql.NVarChar, lastName);
  request.input("userName", sql.NVarChar, userName);
  request.input("phoneNumber", sql.NVarChar, phoneNumber);
  request.input("Email", sql.NVarChar, email);
  await request.query(query);
};

module.exports = { createUser };
