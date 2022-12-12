const createStudent = (name, grade) => {
    let student = {
        name: name,
        grade: grade
    }
    return student
};

const addMathGrade = (someKid) => {
    someKid.math = "B"
    return someKid
    
};

const addHistoryGrade = (someKid) => {
    someKid.history = "C"
    return someKid
};

const addScienceGrade = (someKid) => {
    someKid.science = "A"
    return someKid
};

let matt = createStudent("Matt", 5)
matt = addMathGrade(matt)
matt = addHistoryGrade(matt)
matt = addScienceGrade(matt)
console.log(matt)


