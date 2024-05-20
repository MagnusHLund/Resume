import { callProcedure } from '../Utils/database.js'

export async function handleAddVisitorRequest(req, res) {
  try {
    const ipAddress =
      req.headers['x-forwarded-for'] || req.connection.remoteAddress
    // Stored procedure arguments [ip, last_visit]
    await callProcedure('InsertOrUpdateVisitor', [ipAddress])
    res.send('Received POST request')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export async function handleGetVisitorCountRequest(req, res) {
  try {
    const response = await callProcedure('GetTotalVisitors')
    res.send(response)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
