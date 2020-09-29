use Company
db.createCollection('Employee')
db.createCollection('Department')

db.Employee.insert({_id:4, name:'Adhyayan', dept:'Software', no:'1001', mob:'12345', age:'43'});
db.Employee.save({_id:4, name:'B', dept:'Hardware', no:'1002', mob:'12346'},age:'44');
db.Employee.update({_id:3, name:'C', dept:'Firmware', no:'1003', age:'45'},{$set:{mob:'12347'}},{upsert:true});
db.Employee.update({_id:2, name:'B'}, {$set:{dept:'Hax'}},{upsert:false});

db.Employee.update({},{$set:{location:'Blore'}},{multi:true});

db.Employee.update({_id:3},{$unset:{mob:'12347'}});

db.Employee.find({});

db.Employee.find({name:/^A/});

db.Employee.find({ age : { $gt : 30 }) ;
