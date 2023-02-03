import mongoose from 'mongoose';
import { signup, logIn } from '../controllers/auth.js';
import User from '../models/User.js';
import { expect, should } from 'chai'; 


// Create new User in before block for login validation
// Have signup validation handle the creation itself through req, then deleteMany at end

describe('Auth Controller Validation - Login', () => {
    before((done) => {
        mongoose.set('strictQuery', false);
        mongoose.connect(
        'mongodb+srv://Ethan:2mQWDO8L7jTetddl@cluster0.kbsgj.mongodb.net/validation?retryWrites=true&w=majority'
        ).then(() => {
            const user = new User({
                "email": 'test@test.com',
                "password": 'test'
            });
            return user.save(done());
        })
    });

    it("Should return a jwt token with status 200", async () => {
        const req = { body: {
            "email": "test@test.com",
            "password": 'test'
        }
        };
        const res = {
            email: null,
            token: null,
            id: null,
            expiresIn: null,
            statusCode: null,
            status: function(code) {
                this.statusCode = code;
            },
            json: function(data) {
                this.email = data.email;
                this.token = data.token;
                this.id = data.id;
                this.expiresIn = data.expiresIn;
                return this;
            }
        };
        const result = await logIn(req, res, () => {})

        if (result) {
            expect(status).to.be.equal(200);
            expect(res.email).to.be.equal(req.email);
            should.exist(res.token);
        }
    });

    after((done) => {
        User.deleteMany();
        mongoose.disconnect(done());
    })

})