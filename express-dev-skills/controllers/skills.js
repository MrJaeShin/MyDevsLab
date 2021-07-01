const Skill = require('../models/skill');

module.exports = {
	index,
	show,
	new: newSkill,
	create,
	delete: deleteSkill,
	edit,
	update
};

function index(req, res) {
	res.render('skills/index', {
		skills: Skill.getAll(),
		time: req.time
	});
}

function show(req, res) {
	res.render('skills/show', {
		skill: Skill.getOne(req.params.id),
		skillNum: parseInt(req.params.id) + 1
	});
}

function newSkill(req, res) {
	res.render('skills/new');
}
  
function create(req, res) {
	// console.log(req.body);
	req.body.mastered = false;
	Skill.create(req.body);
	res.redirect('/skills');
}
  
function deleteSkill(req, res) {
	Skill.deleteOne(req.params.id);
	res.redirect('/skills');
}
  
function edit(req, res) {
	res.render('skills/edit', {
	  idx: req.params.id,
	  todo: Skill.getOne(req.params.id)
	});
}
  
function update(req, res) {
	res.redirect('/skills'),
	Skill.updateOne(req.params.id, req.body),
	req.body.mastered ? true : false
}
