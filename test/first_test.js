'use strict'

const Lab = require('lab')

// Test files must require the lab module, and export a test script
const lab = (exports.lab = Lab.script())
const Code = require('code')

const Hapi = require('hapi')
const server = require('../app.js')

const { describe, it } = lab

// const Sequelize = require("sequelize")

// const sequelize = new Sequelize("postgres://shashikirans:password@localhost:5432/database_test", {logging: false});

const model = require("./../models")
const usersController = require('../controllers/usersController')

// const model = require("./../routes")
// const model = require("./../models")


// console.log("hi");
// console.log(sequelize.sync({ force: true}));

// shortcuts to functions from lab
const experiment = lab.experiment  
const test = lab.test



experiment('getting started with hapi testing,', () => {  
  test('TODO')
})

experiment('test the sign up,', () => {  
  test('sign up fails without email address')
  test('sign up fails without password')
})

experiment('test the login,', () => {  
  test('login fails without email address')
  test('login fails for not registered email address')
})


experiment('getting started with hapi testing,', () => {  
  test('lab considers this as a TODO')
})

experiment('getting started with hapi testing,', () => {  
  test('lab considers this test as TOOD and skips it')

  test('always succeeding :)', () => {})
})

experiment('getting started with hapi testing,', { parallel: true }, () => {  
  test('lab considers this test as TOOD and skips it')

  test('always succeeding :)', { timeout: 5000 }, () => {})
})

experiment('getting started with hapi testing,', { parallel: true }, () => {  
  test.skip('lab considers this test as TOOD and skips it')

  test('always succeeding :)', { timeout: 5000 }, () => {})
})


experiment('hapi testing with lab and assertions with code,', () => {  
  test('assert that 1 + 2 equals three', () => {
  	Code.expect(1 + 2).to.equal(3)
    Code.expect('3').to.equal('3')
    Code.expect(3).to.not.equal('3')
  })
})

experiment('hapi testing with lab and assertions with code,', () => {  

test('assert different data types', () => {  
  Code.expect(true).to.be.a.boolean()
  Code.expect(true)
    .to.be.a.boolean()
    .and.to.not.equal(false)

  Code.expect('this is a string').to.startsWith('this')
})
})

experiment('inject requests with server.inject,', () => {  
  test('quickly injects a request', async () => {
    // const server = new Hapi.Server()

    const injectOptions = {
      method: 'GET',
      url: '/'
    }

    // wait for the response and the request to finish
    const response = await server.inject(injectOptions)
    Code.expect(response.statusCode).to.equal(200)
    Code.expect(response.result).to.equal("Hello, world!")
    // console.log(response.result);
  })
})

experiment('inject requests with server.inject,', () => {  
  test('quickly injects a request', async () => {
    // const server = new Hapi.Server()

    const injectOptions = {
      method: 'GET',
      url: '/name'
    }

    // wait for the response and the request to finish
    const response = await server.inject(injectOptions)
    Code.expect(response.statusCode).to.equal(200)
    Code.expect(response.result).to.equal("Hello, name!")
    // console.log(response.result);
  })
})


// describe("userService", function () {
//     var mockResponse = function (callback) { return { send: callback }; };
//     var newUser = { username: "Johne", email: "imjohne" };

//     lab.beforeEach(function () {
//         sequelize.sync({ force: true}).then(function () {});
//     });

//     // it("should find created users", function (done) {
//     //     //arrange
//     //     model.User.create(newUser).then(function () {
//     //         //act
//     //         usersRoutes.get({}, mockResponse(function (data) {
//     //             //assert
//     //             expect(data[0].username).to.eql(newUser.username);
//     //             done();
//     //         }))
//     //     })
//     // });
//     it("should create user", function () {
//         //arrange
//         var req = { body: newUser };

//         console.log(req);
//         //act
//         usersController.createUser(req, mockResponse(function () {
//             //assert
//             console.log("statusCode")
//             // expect(statusCode).to.eql(200);
//             // done();
//         }))
//     });
// });

describe("userService", function () {
	 // var mockResponse = function (callback) { return { send: callback }; };
	
    // const database = "database_test";

    // sequelize.query(`DROP DATABASE "${database}"`).then(() => console.log('dropped created'));

    // console.log(model.User.create);
// 
      // lab.beforeEach( async () => {
       // await model.User.sync({ force : true })

        // Run before every single test
    // });

   lab.beforeEach( async () => {
      await model.User.sync({ force : true })
      .then(() => {
        // factory.create('user', {username: 'kuldeep'}).then(user => {});
        // factory.create('user', {username: 'sachin'}).then(user => {});
        // factory.create('user', {username: 'hello'}).then(user => {});
        // done(null);
      })
      .catch((error) => {
        done(error);
      });
    });

experiment('inject requests with server.inject,', () => {  
		// lab.beforeEach(function () {


 //        model.User.sync({ force: false}).then(function () { console.log("true")});
    // });
  test('quickly injects a request', async () => {

  	 // lab.beforeEach(function () {
        	// sequelize.sync({ force: false}).then(function () {});
    //  });
    // const server = new Hapi.Server()
     // model.User.sync({ force: true}).then(function () { console.log("true")});
     // model.User.sync({ force: false}).then(function () { console.log("true")});

    const injectOptions = {
      method: 'POST',
      url: '/api/users/create',
      payload: {
        username: 'Marcus',
        email: "shashi@yopmail.com"
      }
    }


    // wait for the response and the request to finish
    const response = await server.inject(injectOptions)
    Code.expect(response.result.user.dataValues["email"]).to.equal("shashi@yopmail.com")
    // Code.expect("response.result").to.equal("Hello, name!")
    // console.log(response.result);
  })
})

// experiment('inject requests with server.inject,', () => {  

//   test('quickly injects a request', async () => {
//      // model.User.sync({ force: false}).then(function () { console.log("true")});

//     // const server = new Hapi.Server()


//  //    lab.beforeEach(function () {
//         // sequelize.sync({ force: false}).then(function () {});
//  // });

//     const injectOptions = {
//       method: 'GET',
//       url: '/api/users'
//     }

//     // wait for the response and the request to finish
//     const response = await server.inject(injectOptions)
//     Code.expect(response.result).to.equal("Success")
//     // Code.expect(response.result).to.equal("Hello, name!")
//     console.log(response.result);
//   })
// })
})