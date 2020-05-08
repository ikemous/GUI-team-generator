const Intern = require("../lib/Intern");

describe("Initialization of Intern class", () =>{

  test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
  });

  test("Can set name via Contructor Arguments", () =>{
    const name = "todd";
    const e = new Intern(name);
    expect(e.name).toBe(name);
  });

  test("Can set ID via Constructor Arguments", () =>{
    const name = "todd";
    const id = 1;

    const e = new Intern(name, id);

    expect(e.id).toBe(id);
  });

  test("Can set email via Contructor Arguments", () =>{
    const name = "todd";
    const id = 1;
    const email = "example@email.com";

    const e = new Intern(name, id, email);
    
    expect(e.email).toBe(email);
  });

  test("Can set github username via Constructor Arguments", () => {
    const name = "todd";
    const id = 1;
    const email = "example@email.com";
    const school = "example";

    const e = new Intern(name, id, email, school);

    expect(e.school).toBe(school)
  });

});

describe("Test Intern Class Methods", () =>{

  test("Can set school via constructor", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
  });

  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
  });

  test("Can get school via getSchool()", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });

});
