const { app } = require('../server/app');
const request = require('supertest');
const { connectDatabase } = require('../server/database/connect-database');
const { User } = require('../server/models/user');

beforeAll(async () => await connectDatabase())

beforeEach(async () => {
   await User.remove({});
});


describe('get /user', () => {
    it('get list user', async () => {
        let response = await request(app).get('/user');
        expect(response.body).toEqual({status: true, data: [], message: "success"})
    });

    it('create user', async () => {
        let body = {
            username: "huu471",
            fullName: "nguyen tien huu",
            email: "nguyentienhuu47@gmail.com"
        }
        let response = await request(app).post('/user/signup').send(body);
        const responseEpx = {
            __v: 0,
            username: "huu471",
            fullName: "nguyen tien huu",
            email: "nguyentienhuu47@gmail.com",
            _id: response.body.data._id,
            createdAt: response.body.data.createdAt,
            status: response.body.data.status,
            updatedAt: response.body.data.updatedAt,
        };
        expect(response.body).toEqual({status: true, data: responseEpx, message: "success"})
    });
})