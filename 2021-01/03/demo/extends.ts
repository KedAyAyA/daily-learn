interface Animal {
  extinct: boolean;
  race: string;
};
/**
 * extends keyof 可以解构类型
 * 这里extends没有继承的意思
 */
function setValue<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

const animal: Animal = {
  extinct: true,
  race: 'rabbit',
};

setValue(animal, "extinct", false);


type Optional<T> = { 
  [K in keyof T]?: T[K] 
};

const animal2: Optional<Animal> = {
  extinct: false,
};