enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
  }
  
  const person = {
    name: "Maximilian",
    age: 30,
    role: Role.ADMIN,
  };
  
  if (person.role === Role.AUTHOR) {
    console.log("Author");
  }
  