class Transcriptor {
    private DNATORNAMAP:any = {
        'G' : 'C',
        'C' : 'G',
        'T' : 'A',
        'A' : 'U'
     }
    toRna(dnastrand: string) {
        let dnaSequence = dnastrand.split('');
        dnaSequence = dnaSequence.map(strand => {
            if(this.DNATORNAMAP[strand]){
                return this.DNATORNAMAP[strand];
            }else{
                throw new Error('Invalid input DNA.');
            }
        })
        return dnaSequence.join('');
    }
}

export default Transcriptor