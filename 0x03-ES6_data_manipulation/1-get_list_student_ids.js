export default function getListStudentIds (obj) {
    let arr = [];
    
    if (typeof obj === 'object' && obj !== null) {
        obj.map((item) => {
            arr.push(item.id);
        });
    }

    return arr;
}