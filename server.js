'use strict';
import express from 'express';
import session from 'express-session';
import logger from 'morgan';
import hidePoweredBy from 'hide-powered-by';
import { join } from 'path';
import { json, urlencoded } from 'body-parser';
import { createWriteStream } from 'fs';

let app = express();

app.set('views', join(__dirname, 'views/'));
app.set('view engine', 'jade');

if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

let accessLogStream = createWriteStream('./access.log', {flags: 'a'});
app.use(logger('{"remote_addr": ":remote-addr", "remote_user": ":remote-user", "date": ":date[iso]", "method": ":method", "url": ":url", "http_version": ":http-version", "status": ":status", "result_length": ":res[content-length]", "referrer": ":referrer", "user_agent": ":user-agent", "response_time": ":response-time"},', {stream: accessLogStream}));

app.use(json({limit: '50mb'}));
app.use(urlencoded({limit: '50mb', extended: true}));
app.use(require('stylus').middleware({src: __dirname + '/public'}));
app.use(express.static(join(__dirname, 'public')));
app.use(session({
        key: 'blog',
        secret: 'blog',
        cookie: {expires: new Date(253402300000000)},
        resave: true,
        saveUninitialized: true
}));
app.disable('x-powered-by');
app.use(require(join(__dirname, 'routes/urlRoute')));

app.listen(84);
module.exports = app;
