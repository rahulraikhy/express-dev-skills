// const skills = require('../controllers/skills')

const skills = [
    { id: 125223, skill: 'HTML', done: true },
    { id: 127904, skill: 'CSS', done: false },
    { id: 139608, skill: 'Javascript', done: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    console.log(skills)
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}