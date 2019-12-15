const ObjectID = require('mongodb').ObjectID;
const COLLECTION = 'todo-collection';
module.exports = function (app,db) {

    // post request to insert data in database
    app.post('/api/todos', (req,res) => {
        const body = req.body
        if(body && body.caption){
            const collection = db.collection(COLLECTION);
            collection.insert({ // if a collection does not exist it will create a collection and insert the document in collection
                caption : body.caption,
                isCompleted : false,
            })
                .then(result => {
                    res.send({
                        status:'success',
                        message:'1 record created',
                        record: result.ops[0]
                    })
                })
                .catch(err => {
                    res.status(400).send({
                        status:'error',
                        message:err
                    })
                })
        } else {
            res.status(400).send({
                status:'error',
                message:'caption cannot be empty'
            })
        }
    })

    // get request to fetch data
    app.get('/api/todos/:todoId?',(req,res) => {
        const collection = db.collection(COLLECTION);
        const todoId = req.params.todoId;
        if(todoId){
            const findObj = {'_id' : new ObjectID(todoId)};
            collection
                .find(findObj)
                .toArray()
                .then(data =>{
                    res.send({
                        message:'success',
                        data:data
                    })
                })
                .catch(err =>{
                    res.status(400).send({
                        status:'error',
                        message:err
                    })
                })
        } else {
            collection.find({}).toArray().then(data => {
                res.send({
                    message:'success',
                    data:data
                })
            })
        }
    })

    // delete api
    app.delete('/api/todos/:todoId?', (req,res) => {
        // get from db when no id is there
        const collection = db.collection(COLLECTION);
        const todoId = req.params.todoId;
        if(todoId){
            const delObj = {_id : new ObjectID(todoId)};
            collection.deleteOne(delObj)
                .then(
                    res.send({
                        message:'success',
                        deletedCount: '1'
                    })
                )
                .catch(err => {
                    res.status(400).send({
                        'status':'error',
                        message:err
                    })
                })
        } else {
            collection.remove({})
                .then(
                    res.send({
                        status:'success',
                        message:'list is cleared'
                    })
                )
        }
    })
}