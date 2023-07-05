export default function updateStudentGradeByCity (obj, city, newGrades) {
    if (typeof obj === 'object' && typeof city === 'string' && obj !== null) {
        let filterObj = obj.filter(item => item.location === city);
        // let newGrade = [];
        // newGrade.push(newGrades);
        
        filterObj.map(item => {
            item['grade'] = Object(newGrades).grade;
            // newGrades.map((gradeObj) => {
            // })
        })
        return filterObj;
    }
}
