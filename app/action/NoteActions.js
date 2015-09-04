/**
 * Created by Jonny on 9/4/15.
 */
var Reflux  = require('reflux');
var NoteActions = Reflux.creatActions({
    "createNote",
    "editNote"
});

module.exports = NoteActions;