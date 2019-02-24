const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:  String,
    firstName: String,
    lastName:   String,
    alias:   String,
    pin:   String,
    favLang: [String],
    favHost: [String],
    favInterface: [String],
});
var User = mongoose.model('user', userSchema);
let _uri = 'mongodb+srv://cp9:dhishoom@cluster0-l8edd.mongodb.net/clidb?retryWrites=true';
mongoose.connect(_uri, {useNewUrlParser: true}, (err) => {
    if ( err ) {
        console.error('MongoError:', err);
    } else {
        console.log('connected mongoose');
    }
});

exports.handler = function(event, context, callback) {
    return new Promise((resolve, reject) => {
        const headers = {
            'Access-Control-Allow-Origin': event.headers.origin,
            'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
            "Access-Control-Allow-Headers": "Content-Type",
            'Content-Length': '0'
            /** add other headers as per requirement */
        };
        if (event.httpMethod === 'OPTIONS') {
            resolve({
                statusCode: 204,
                headers: headers
            });
        } else {
            // console.log('context',context);
            // console.log('event',event);
            let data = JSON.parse(event.body);
            // console.error('body', typeof data, data);
            var user = new User(data);
            user
            .save()
            .then((savedUser) => {
                // console.log('user saved', typeof savedUser, savedUser, JSON.stringify(savedUser));
                resolve({
                    statusCode: 200,
                    headers: headers,
                    body: savedUser._id+''
                });
            })
            .catch((err) => {
                // console.log('err', err);
                reject({
                    statusCode: 200,
                    body: JSON.stringify(err)
                });
            });
        }
    });
}
