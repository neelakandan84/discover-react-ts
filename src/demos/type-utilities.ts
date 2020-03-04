interface Car {
  make: string;
  model: string;
  year: number;
}

type CarKeysStatic = 'make' | 'model' | 'year';
type CarKeys = keyof Car;

export {}