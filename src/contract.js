import web3 from './web3'

const address = 'test'
const abi = 'test'

export default new web3.eth.Contract(JSON.parse(abi), address)
