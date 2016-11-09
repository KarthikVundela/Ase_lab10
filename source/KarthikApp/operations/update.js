var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://karthik:kaira123$@ds011449.mlab.com:11449/karthik_ase_lab8';

var updateUserwithName = function(db,callback) {
    db.collection('collection1').update( {

        "fname":"Sravan"
        // "_id": {"58194c35c9b561280453cc9c"}
}, {
            $set: { "fname": "Sravan Kumar", type: 0,  },
            $currentDate: { lastModified: true }
        },

        function(err, result) {
        assert.equal(err, null);
        console.log("updated the specified document in the collection named collection1.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    updateUserwithName(db, function() {
        db.close();
    });
});
