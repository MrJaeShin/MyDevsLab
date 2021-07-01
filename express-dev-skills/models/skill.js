const skills = [
    {skill: 'HTML', mastered: true},
    {skill: 'CSS', mastered: true},
    {skill: 'JavaScript', mastered: true},
    {skill: 'Node', mastered: false},
    {skill: 'Express', mastered: false},
    {skill: 'React', mastered: false},
];
  
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne
};
  
function getOne(id) {
  return skills[id]
}

function getAll() {
  return skills;
}


function create(todo) {
  skills.push(skill);
}
  
function deleteOne(id) {
  skills.splice(id, 1);
}
  
function updateOne(id, body) {
  skills[id] = body;
}