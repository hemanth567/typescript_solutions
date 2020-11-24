class Squares {
    num: number;
    _squareOfSum: number = 0;
    _sumOfSquares : number = 0;
    _difference : number = 0;
    constructor(num:number){
        this.num = num;
    }
    get squareOfSum(){
        return Math.pow((this.num * (this.num + 1) / 2),2);
    }
    get sumOfSquares(){
        return (this.num * (this.num + 1) * (2*this.num + 1)) / 6;
    }
    get difference(){
        return this.squareOfSum - this.sumOfSquares;
    }
}
export default Squares