// ROUTER
var path = require("path");
    
const router = app => {

    app.get('/', (request, response) => {
        homepage_file = "/focustime.html"
        response.sendFile(homepage_file, { root: __dirname })
    });

      
};
module.exports = router;