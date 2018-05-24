class Driver {
  startDate (startDateAsString) {
    return const date =  new Date(startDateAsString);
  }
  
  constructor(name, startDateAsString) {
    this.name = name;
    this.startDate = startDate(startDateAsString);
  }
}
