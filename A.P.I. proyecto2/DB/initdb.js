require('dotenv').config()

const { getConnection } = require('./DB')

async function main () {
  let connection
  try {
    connection = await getConnection()
  } catch (error) {
    console.error(error)
  } finally {
    if (connection) connection.release()
    process.exit()
  }
};
main()
