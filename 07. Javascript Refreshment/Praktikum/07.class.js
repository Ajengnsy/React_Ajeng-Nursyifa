class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hello, nama saya ${this.name} dan saya berumur ${this.age} tahun maacii`
    );
  }
}

const person1 = new Person("Ajeng", 20);
person1.introduce();

const person2 = new Person("Syifa", 19);
person2.introduce();
