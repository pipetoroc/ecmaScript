const regex = /\b(Apple)+\b/g;

const fruit = 'apple, banana, kiwi, Apple';

for (const match of fruit.matchAll(regex)){
  console.log(match)
}