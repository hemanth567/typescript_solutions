export class ResistorColor {
  private colors: string[];
  private colorMap: any = {
    'black': 0,
    'brown': 1,
    'red' : 2,
    'orange': 3,
    'yellow' : 4,
    'green': 5,
    'blue': 6,
    'violet' : 7,
    'grey' : 8,
    'white': 9
  };
  private resistance: number;

  constructor(colors: string[]) {
    this.colors = colors;
    if(this.colors.length>=2){
      this.resistance = parseInt(''+this.colorMap[this.colors[0]]+this.colorMap[this.colors[1].toLowerCase()]);
    }else{
      throw new Error('At least two colors need to be present')
    }
  }
  value = (): number => this.resistance;
}
