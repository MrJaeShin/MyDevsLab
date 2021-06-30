const skills = [
    {skill: 'HTML', done: true},
    {skill: 'CSS', done: true},
    {skill: 'JavaScript', done: true},
    {skill: 'Node', done: false},
    {skill: 'Express', done: false},
    {skill: 'React', done: false},
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills[id]
  }