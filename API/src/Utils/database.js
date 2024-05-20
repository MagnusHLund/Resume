import mysql from 'mysql'
import { getDatabaseInfo } from './constants.js'

let pool = null

function connectToDatabase() {
  const databaseInfo = getDatabaseInfo()
  pool = mysql.createPool({
    connectionLimit: 5,
    host: databaseInfo['HOST'],
    user: databaseInfo['USER'],
    password: databaseInfo['PASS'],
    database: databaseInfo['NAME'],
  })
}

/**
 * @param {string} procedureName
 * @param {Array} args
 */
export function callProcedure(procedureName, args) {
  return new Promise((resolve, reject) => {
    connectToDatabase()
    const placeholders = args ? args.map(() => '?').join(',') : ''
    connection.query(
      `CALL ${procedureName}(${placeholders})`,
      args,
      (error, results) => {
        if (error) {
          reject(error)
        } else {
          resolve(results[0])
        }
        connection.end()
      }
    )
  })
}
