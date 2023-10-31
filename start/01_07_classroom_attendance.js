// Destructuring
function getStudents(classroom) {
    let { hasTeachingAssistant, classList } = classroom;
    let teacher, teachingAssistant, students;

    if (hasTeachingAssistant) {
        [teacher, teachingAssistant, ...students] = classList;
    } else {
        [teacher, ...students] = classList;
    }
    return students;
}

console.log(getStudents({
    hasTeachingAssistant: false,
    // hasTeachingAssistant: true,
    classList: ['Rashida', 'John', 'Roman', 'Lisa', 'Maria', 'Omar', 'Mika', 'Zika']
}));
