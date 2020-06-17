const mongoose = require('mongoose');
const request = require('supertest')
const app = require('../index')




beforeAll(async () => {
  const url = `mongodb://localhost:27017/Test_AuthUser`
  await mongoose.connect(url, { useNewUrlParser: true })

})

it('Should save user to database', async done => {
  const res = await request(app).post('/user/adduser')

    .send({
      employeeId:"5ec7ab5a1313b82011d81cef",
      profession:"Developer"   
     })
     expect(res.status).toBe(200)
    // expect(res.body.message).toBe("User added!")

  done()
})
