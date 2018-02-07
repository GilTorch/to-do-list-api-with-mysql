var model=require('../model/todoListModel.js')
exports.list_all_tasks = function(req, res) {
  model.CONNECTION.query(model.QUERIES.READ_ALL_TASKS,function(err,result){
    if(err) throw err;
    res.json(result);
  });
};


exports.create_a_task = function(req, res) {
  var new_task = req.body;
  model.CONNECTION.query(model.QUERIES.CREATE_A_TASK,[new_task.name,new_task.date,new_task.status],function(err,result){
    if(err){
      res.send(err);
    }
    res.json(result);
  })
};


exports.read_a_task = function(req, res) {
   var id=req.params.taskId;
   console.log(id);
   model.CONNECTION.query(model.QUERIES.FIND_TASK_BY_ID,[id],function(err,result){
      if(err)
      {
        res.send(err);
      }
      res.json(result);
   });
};


exports.update_a_task = function(req, res) {
  var id=req.params.taskId;
  var name=req.body.name;
  var date=req.body.date;
  var status=req.body.status;
  model.CONNECTION.query(model.QUERIES.UPDATE_A_TASK,[name,date,status,id],function(err,result){
     if(err)
     {
       res.send(err);
     }
     res.json(result);
  });
};


exports.delete_a_task = function(req, res) {
  var id=req.params.taskId;
  model.CONNECTION.query(model.QUERIES.DELETE_A_TASK,[id],function(err,result){
    if(err)
    {
      res.send(err);
    }
    res.json(result);
  });
};