var mysql=require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:'todolist_db'
});

exports.CONNECTION=con;

exports.QUERIES={
  FIND_TASK_BY_ID:"SELECT * FROM taches WHERE id=?",
  READ_ALL_TASKS:"SELECT * FROM taches",
  CREATE_A_TASK:"INSERT INTO taches(name,created_date,status) VALUES(?,?,?)",
  UPDATE_A_TASK:"UPDATE taches SET name=?,created_date=?,status=? WHERE id=?",
  DELETE_A_TASK:"DELETE FROM taches WHERE id=?"
}
