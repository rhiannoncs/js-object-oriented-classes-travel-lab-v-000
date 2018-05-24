class Driver {
  startDate (startDateAsString) {
    const date =  new Date(startDateAsString);
    this.startDate = date;
  }
  
  constructor(name, startDateAsString) {
    this.name = name;
    this.startDate = startDate(startDateAsString);
  }
}
