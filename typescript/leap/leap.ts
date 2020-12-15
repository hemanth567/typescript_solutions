function isLeapYear(year: number) {
    // Your code here
    return (((year % 4 === 0) && (year%100 !== 0)) || (year % 400 === 0))
}

export default isLeapYear