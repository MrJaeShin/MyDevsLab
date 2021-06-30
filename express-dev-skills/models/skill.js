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
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills[id]
  }