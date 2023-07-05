export default function getStudentIdsSum (obj) {
    let arr = [];

    if (typeof obj === 'object' && obj !== null) {
        obj.map((item) => {
            arr.push(item.id);
        });
        return arr.reduce(getSum);
    }
    return arr;
}

function getSum(total, num) {
    return total + num;
}