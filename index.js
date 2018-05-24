class Driver {
  startDate (startDateAsString) {
    return new Date(startDateAsString);
  }
  
  constructor(name, startDateAsString) {
    this.name = name;
    this.startDate = startDate(startDateAsString);
  }
}
