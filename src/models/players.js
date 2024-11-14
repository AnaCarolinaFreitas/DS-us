class Player {
    constructor( name, turma) {
      this.id = this.generateid();
      this.name = name;   
      this.turma = turma;
    }
  
    generateid() {
      return Math.floor(Math.random() * 999 + 1);
    }
  }
  
  export default Player;  