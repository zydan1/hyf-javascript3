class draw {
  constructor(father, child, value, Style) {
    this.father = father;
    this.child = child;
    this.value = value;
    this.Style = [];
  }
  CreateEl(child, value, father, Style) {
    child = document.createElement(this.child);
    child.innerHTML = this.value;
    father = this.father.appendChild(child);
    /*
    for(let i = 0 ; i < this.Style.length ; i++ ){
     child.style.Style[i] = Style[i+1] 
    Style[i] = Style[i+2];
    }
    */
  }
}
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

;
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));

let Fath = document.getElementById('Movie');
let title = new draw(Fath, 'h1', `Title : ${myMovie.getTitle()}`)
let writer = new draw(Fath, 'p', `Writers : ${myMovie.getWriters()}`)
let star = new draw(Fath, 'p', myMovie.getStars().map(actor => ` Actor Name : ${actor.getName()} Age :( ${actor.getAge()})`))
let dir = new draw(Fath, 'h2', ` Director : ${myMovie.getDirector()}`)
let average = new draw(Fath, 'p', `Rate : ${myMovie.getAverageRating()}`)

title.CreateEl();
writer.CreateEl();
star.CreateEl();
dir.CreateEl();
average.CreateEl();
