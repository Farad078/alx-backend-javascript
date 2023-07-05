export default function getStudentsByLocation (obj, city) {
    if (typeof obj === 'object' && typeof city === 'string' && obj !== null) {
        let filterObj = obj.filter(item => item.location === city);
        return filterObj;
    }
}
