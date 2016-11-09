/*
 * Created by mnpw3d on 20/10/2016.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://karthik:kaira123$@ds011449.mlab.com:11449/karthik_ase_lab8';
var findUser = function(db, callback) {
    var cursor =db.collection('collection1').find( );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log(doc);
        } else {
            callback();
        }
    });
};
var findUserwithName = function(db,callback) {
    var cursor = db.collection('collection1').find({"fname":"Sravan"});
    //console.log(cursor);
    cursor.each(function(err,doc) {
        assert.equal(err,null);
        console.log(doc);
        if(doc != null)
        {
            console.log("First Name:" + doc.fname);
            console.log("Last Name:" + doc.lname);
            console.log("city:" + doc.address.city);
        }
    });
}
var findUserwithUniversity = function(db, callback) {
    var cursor = db.collection('collection1').find({"education.university":"UMKC"});
    console.log(cursor);
    cursor.each(function(err,doc){
       assert.equal(err,null);
       if(doc != null)
       {
           console.log("First Name:" + doc.fname);
           console.log("University:" + doc.education.university);
           console.log("Degree:" + doc.education.degree);
           console.log("Major:" + doc.education.major);
           console.log("mail:" + doc.mail);
       }
    });
}
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findUserwithName(db, function() {
        db.close();
    });
});