import web3 from './web3'
import axios from 'axios'

const API_URL = 'http://api.etherscan.io/api?module=contract&action=getabi&address='
const apikey = process.env.REACT_APP_API_KEY

const getContract = async address => {
  const { data: { result } } = await axios.get(`${API_URL}${address}&apikey=${apikey}`)
  return new web3.eth.Contract(JSON.parse(result), address)
}

export default getContract
