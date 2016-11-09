var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://karthik:kaira123$@ds011449.mlab.com:11449/karthik_ase_lab8';

var deleteUserwithName = function(db,callback) {
    db.collection('collection1').remove( {

            "fname":"Karthik"

        },

        function(err, result) {
            assert.equal(err, null);
            console.log("deleted the specified document in the collection named collection1.");
            callback();
        });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    deleteUserwithName(db, function() {
        db.close();
    });
});
