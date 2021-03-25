/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';

import { Contact } from '../src/models/contact.js';

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);

describe('Contacts', () => {
    beforeEach((done) => {
        Contact.deleteMany({}, (err) => {
            done();
        });
    });

    describe('/GET Contacts', () => {
        it('It should GET all the contacts', (done) => {
            chai.request(server)
                .get('/api/contacts')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(0);
                    done();
                });
        });
    });

    describe('/POST Contact', () => {
        it('it should not POST a contact without email field', (done) => {
            const contact = {
                firstName: 'Test',
                lastName: 'Contact',
                phoneNumber: '123456789',
            };
            chai.request(server)
                .post('/api/contacts')
                .send(contact)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.be.a('array');
                    done();
                });
        });

        it('it should POST a contact ', (done) => {
            const contact = {
                firstName: 'Test',
                lastName: 'Contact',
                phoneNumber: '123456789',
                email: 'test@test.com',
            };
            chai.request(server)
                .post('/api/contacts')
                .send(contact)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Contact successfully added');
                    res.body.data.should.have.property('firstName', 'Test');
                    res.body.data.should.have.property('lastName');
                    res.body.data.should.have.property('phoneNumber');
                    res.body.data.should.have.property('email');
                    done();
                });
        });
    });
});
