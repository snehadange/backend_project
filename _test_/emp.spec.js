
//const supertest = require('supertest')
const mongoose = require('mongoose');
const request = require('supertest')
const app = require('../index')




beforeAll(async () => {
  const url = `mongodb://localhost:27017/Test_AuthUser`
  await mongoose.connect(url, { useNewUrlParser: true })

})

it('Should save employee to database', async done => {
  const res = await request(app).post('/employee/add')

    .send({
      name: "Hedvi",
      email: "hedvi@gmail.com",
      mobile: 9757187206,
      city: "mumbai"
    })
  expect(res.status).toBe(200)
  // expect(res.body.message).toBe('Employee added!')

  done()
})


it('Should Get Data', async done => {
  const res = await request(app).get('/employee')
  expect(res.status).toBe(200)
  expect(res.body.message).toBe('Get all Data successfully')
  done()
})

it('update Data', async done => {
  const res = await request(app).put('/employee/update/5ec78b735d86f0108ab07eca')
    .send({
      name: "vedija",
      email: "vedija@gmail.com",
      mobile: 9757187346,
      city: "mumbai"
    })
  expect(res.status).toBe(400)
  //expect(res.body.message).toBe('employees updated!')
  done()
})

/*Cleaning up the database between tests
async function removeAllCollections () {
	const collections = Object.keys(mongoose.connection.collections)
	for (const collectionName of collections) {
	  const collection = mongoose.connection.collections[collectionName]
	  await collection.deleteMany()
	}
}

//Deleting the database
async function dropAllCollections () {
	const collections = Object.keys(mongoose.connection.collections)
	for (const collectionName of collections) {
		const collection = mongoose.connection.collections[collectionName]
		try {
			await collection.drop()
		} catch (error) {
			// This error happens when you try to drop a collection that's already dropped. Happens infrequently. 
			// Safe to ignore. 
			if (error.message === 'ns not found') return
	
			// This error happens when you use it.todo.
			// Safe to ignore. 
			if (error.message.includes('a background operation is currently running')) return
	
			console.log(error.message)
		}
	}
}
// Disconnect Mongoose
afterAll(async () => {
	await removeAllCollections()
	await dropAllCollections()
	await mongoose.connection.close() //closing mongoose connection
})
*/

