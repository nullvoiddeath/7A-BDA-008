use 'test'
db.MongoDBHandsOn.find({})

db.MongoDBHandsOn.aggregate([
    { $group : { _id: "Sum", sum: {$sum:"$children"} } }
])
    
db.MongoDBHandsOn.aggregate([
    { $group : { _id: "Avg of Age", avg: {$avg:"$age"} } }
])