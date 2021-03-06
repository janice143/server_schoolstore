const categories = require('./categories.js')
const products = require('./products.js')
const users = require('./users.js')
const adminUser = require('./admin/user.js')
const cart = require('./cart.js')
const v1 = require('./v1.js')

module.exports = (app) =>{
    // console.log(app)
    app.use('/', categories);
    app.use('/', products);
    app.use('/', users);
    app.use('/', adminUser);
    app.use('/', cart);
    app.use('/api/v1', v1);
    
}