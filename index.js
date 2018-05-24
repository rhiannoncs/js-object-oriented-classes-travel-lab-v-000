class Driver {
  constructor(name, startDateAsString) {
    this.name = name;
    this.startDateAsString = startDateAsString;
  }
  
  startDate () {
    const date =  new Date(startDateAsString);
    this.startDate = date;
  }
}
