var React = require('react');
var noteApp = require('./components/noteApp.jsx');

var App = React.creatClass({
    render:function(){
        return (
            <html>
                <head lang="en">
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>Note App</title>
                    <link href="css/app.css" rel="stylesheet"/>
                </head>
            </html> 
            <body>
                <NoteApp/>
            </body>   
        )
    }
});

module.exports = App;