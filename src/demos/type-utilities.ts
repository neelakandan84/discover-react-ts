interface Car {
  make: string;
  model: string;
  year: number;
}

type CarKeysStatic = 'make' | 'model' | 'year';
type CarKeys = keyof Car;

interface Book {
  author: string;
  title: string;
  pages: number;
}

interface Movie {
  title: string;
  director: string;
  writer: string;
  year: number;
}

type BookMovie = Movie & Book; // {author, title, pages, director, writer, year}
type MoviePeople = Pick<Movie, 'director' | 'writer'> // {director, writer}
type BookOrMovie = Movie | Book; // Can only use 'title' because it's common to Movie and Book
type LimitedList = 'foo' | 'bar' | 'baz';


export {}