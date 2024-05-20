import axios from 'axios'

export const addVisitor = async () => {
  try {
    const response = await axios.post(
      'https://api.magnuslund.com/visitor/add',
      {}
    )
    if (response.status !== 200) {
      throw new Error(`Failed to add visitor: ${response.status}`)
    }
    return response.data
  } catch (error) {
    console.error(`An error has occurred: ${error}`)
    throw new Error(`Failed to add visitor: ${error.message}`)
  }
}

export const getVisitor = async (): Promise<number> => {
  try {
    const response = await axios.get(
      'https://api.magnuslund.com/visitor/getCount'
    )
    if (response.status !== 200) {
      throw new Error(`Failed to get visitor count: ${response.status}`)
    }
    const visitorNumber: number = response.data[0].TotalVisitors
    return visitorNumber
  } catch (error) {
    console.error(`An error has occurred: ${error}`)
    throw new Error(`Failed to get visitor count: ${error.message}`)
  }
}
