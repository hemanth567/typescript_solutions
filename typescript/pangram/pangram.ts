export default class Pangram{
    private _sentence;
    constructor(sentence: string){
        this._sentence = sentence;
    }
    isPangram(){
        let alphabet = new Array<boolean>(26).fill(false);
        if(this._sentence){
            this._sentence.split('').forEach(char => {
                alphabet[char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)] = true;
            })
            if(alphabet.indexOf(false) === -1){
                return true;
            }
        }
        return false;
    }
}