const Manager = require("../lib/Manager");

describe("Initialization of Engineer class", () =>{

  test("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
  });

  test("Can set name via Contructor Arguments", () =>{
    const name = "todd";
    const e = new Manager(name);
    expect(e.name).toBe(name);
  });

  test("Can set ID via Constructor Arguments", () =>{
    const name = "todd";
    const id = 1;

    const e = new Manager(name, id);

    expect(e.id).toBe(id);
  });

  test("Can set email via Contructor Arguments", () =>{
    const name = "todd";
    const id = 1;
    const email = "example@email.com";

    const e = new Manager(name, id, email);
    
    expect(e.email).toBe(email);
  });

  test("Can set github username via Constructor Arguments", () => {
    const name = "todd";
    const id = 1;
    const email = "example@email.com";
    const officeNumber = "example";

    const e = new Manager(name, id, email, officeNumber);

    expect(e.officeNumber).toBe(officeNumber)
  });

});

describe("Test Manager Class Methods", () =>{

  test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });

  test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
  });

  test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });

});

