const Engineer = require("../lib/Engineer");

describe("Initialization of Engineer class", () =>{

  test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
  });

  test("Can set name via Contructor Arguments", () =>{
    const name = "todd";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
  });

  test("Can set ID via Constructor Arguments", () =>{
    const name = "todd";
    const id = 1;

    const e = new Engineer(name, id);

    expect(e.id).toBe(id);
  });

  test("Can set email via Contructor Arguments", () =>{
    const name = "todd";
    const id = 1;
    const email = "example@email.com";

    const e = new Engineer(name, id, email);
    
    expect(e.email).toBe(email);
  });

  test("Can set github username via Constructor Arguments", () => {
    const name = "todd";
    const id = 1;
    const email = "example@email.com";
    const gitHub = "example";

    const e = new Engineer(name, id, email, gitHub);

    expect(e.github).toBe(gitHub)
  });

});

describe("Test Engineer Class Methods", () =>{

  test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });

  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });

  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });

});

