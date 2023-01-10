const marks = [80, 80, 50];
console.log(calculateGrade(average));

function calculateGrade(marks) {
    let average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';    
}

function calculateAverage(array) {
    let sum = 0;
    for (const value of marks) {
        sum += value;
    }
    
    return sum / marks.length;
}