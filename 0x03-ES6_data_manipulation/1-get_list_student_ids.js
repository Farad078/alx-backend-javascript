function getListStudentIds (obj) {
    let arr = [];
    
    if (obj instanceof Class) {
        obj.map((item) => {
            arr.push(item.id);
        })
    }

    return arr;
}