use Student
db.createCollection('StudDetails');

db.StudDetails.insert({_id:1,name:'ABC',rollNo:11,age:20,contactNo:'0123456789', emailId:'void@null.com'});
db.StudDetails.insert({_id:2,name:'XYZ',rollNo:10,age:21,contactNo:'0123456779', emailId:'null@null.com'});
db.StudDetails.insert({_id:3,name:'MNO',rollNo:20,age:22,contactNo:'0123463789', emailId:'void@void.com'});
db.StudDetails.insert({_id:4,name:'PQR',rollNo:30,age:23,contactNo:'0122556789', emailId:'null@void.com'});
db.StudDetails.find({})
db.StudDetails.update({rollNo:10},{$set:{emailId:'updated@gmail.com'}})
db.StudDetails.update({rollNo:11},{$set:{name:'FEM'}})
db.StudDetails.drop()
db.StudDetails.find({})

use Customer
db.createCollection('Customer')

db.Customer.insert({cust_id:1,Acc_bal:1500,Acc_type:"Z"})
db.Customer.insert({cust_id:2,Acc_bal:3000,Acc_type:"A"})
db.Customer.insert({cust_id:1,Acc_bal:1200,Acc_type:"A"})
db.Customer.insert({cust_id:3,Acc_bal:500,Acc_type:"Z"})
db.Customer.insert({cust_id:2,Acc_bal:1600,Acc_type:"Z"})

db.Customer.find({Acc_bal:{$gt:1200}, Acc_type:"Z"})
db.Customer.aggregate([
    {   
        $group: {
            _id: "$cust_id",
            min_bal: {$min: "$Acc_bal"},
            max_bal: {$max: "$Acc_bal"}
        }
    }
]);
db.Customer.drop()
