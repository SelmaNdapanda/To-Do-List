class localStoreMock {
  static data = [];

  static add(obj) {
    StorageMock.data.push(obj);
  }
}

export default localStoreMock;