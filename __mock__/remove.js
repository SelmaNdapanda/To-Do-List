class localStoreMock {
  static data = [];

  static add(obj) {
    localStoreMock.data.push(obj);
  }
}

export default localStoreMock;