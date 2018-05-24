class Driver {
  constructor(name, startDateAsString) {
    this.name = name;
    this.startDate = startDate(startDateAsString);
  }
  
  startDate (startDateAsString) {
    const date =  new Date(startDateAsString);
    this.startDate = date;
  }
}
