class Movie {
  constructor(title, director) {
    // add your code here
    this.title = title;
    this.director = director;
    this.stars = [];
  }

  getTitle() {
    return this.title;
  }

  getDirector() {
    return this.director;
  }

  addStar(star) {
    this.stars.push(star);

  }

  getStars() {
    return this.stars;
  }

  addWriter(writer) {
    this.writer = writer;
  }

  getWriters() {
    return this.writer;
  }

  addRating(rating) {
    this.rating = rating;
  }

  getAverageRating() {
    return this.rating;
  }

  // ... Add yours :-) Look to IMDB for inspiration
}

class StaffMember {
  constructor(name, role, dateOfBirth) {
    this.name = name;
    this.role = role;
    this.dateOfBirth = dateOfBirth;
    this.movie = []
  }

  addMovie(movie) {
    return this.movie = movie.getDirector();

  }

  getName() {
    // add your code here
    return this.name;
  }

  getRole() {
    // add your code here
    return this.role;
  }

  getAge() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.dateOfBirth + ' Years';
  }
}

const myMovie = new Movie('Padman', 'R. Balk');
const Writers = myMovie.addWriter([' R. Balki', 'Swanand Kirkire (co-writer)'])

const Rating = myMovie.addRating('426 ( 2,100)')
const firstActor = new StaffMember('Akshay Kumar', 'Noh', 1967);
const secondActor = new StaffMember('Sonam Kapoor ', 'Nxsaa', 1985);
const thActor = new StaffMember('Radhika Apte', 'Nloa', 1980);
myMovie.addStar(secondActor);
myMovie.addStar(thActor);
myMovie.addStar(firstActor);

console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
function createEl(father, child, value,id, Style) {
  child = document.createElement(child);
  child.innerHTML = value;
  child.setAttribute("style",Style);
  child.setAttribute("id",id)
  father = father.appendChild(child);
}
let Fath = document.getElementById('Movie');
createEl(Fath, 'h1', `Title : ${myMovie.getTitle()}`,"title","color: rgb(123,45,64);");
createEl(Fath, 'p', `Writers : ${myMovie.getWriters()}`,"writer","font-size: 30px;color: red")
createEl(Fath, 'p', myMovie.getStars().map(actor => ` Actor Name : ${actor.getName()} Age :( ${actor.getAge()})`),"actors","font-size:30px;color:rgb(211, 31, 157);")
createEl(Fath, 'p', `Rate : ${myMovie.getAverageRating()}`,'rate','color:green;font-size:30px;')
createEl(Fath, 'h2', ` Director : ${myMovie.getDirector()}`,'dir',"font-size: 30px;color:aqu;font-size: 30px;color: rgb(211, 31, 157);")
