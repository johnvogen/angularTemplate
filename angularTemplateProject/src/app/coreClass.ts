export class coreClass {
  greeting: string;


  constructor(private mySecretVariable: any, message: string, public myVariableA?: any, public myVariableB?: any, public myVariableC?: any, public myVariableD?: any) {
    this.greeting = message;

  }
  greet() {
    return "Hello, " + this.greeting;
  }
  work() {
    return "Hello, " + this.mySecretVariable;
  }
  optionals() {
    return "A: " + this.myVariableA + " " + "B: " + this.myVariableB + " " + "C: " + this.myVariableC + " " + "D: " + this.myVariableD;
  }


}
