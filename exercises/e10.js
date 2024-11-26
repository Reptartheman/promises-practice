export const getFirstResolvedPromise = (promises) => {
  //*  write code to pass test ⬇ ️
  return Promise.any(promises).then((res) => res);
};

export const getFirstPromiseOrFail = (promises) => {
  //*  write code to pass test ⬇ ️
  return Promise.race(promises);
};

export const getQuantityOfRejectedPromises = (promises) => {
  //*  write code to pass test ⬇ ️

  return Promise.allSettled(promises).then((results) =>
    results.filter((result) => result.status === "rejected").map(result => result))
    .then(results => results.length);
};

export const getQuantityOfFulfilledPromises = (promises) => {
  //*  write code to pass test ⬇ ️
  return Promise.allSettled(promises).then((results) =>
    results.filter((result) => result.status === "fulfilled").map(result => result))
    .then(results => results.length);
};

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Array ⬇ ⬇ ⬇ ⬇
export const allCharacters = [
  { id: 1, name: "billy" },
  { id: 2, name: "mandy" },
  { id: 3, name: "grim" },
];
//! ⬆  ⬆  ⬆  ⬆ do not edit this array   ⬆  ⬆  ⬆  ⬆ ️

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Function ⬇ ⬇ ⬇ ⬇
export const fetchCharacterById = (id) => {
  // This function simulates an API, although most api's will return
  // simple data like this quickly, we want you to practice concurrent programming
  // so we're forcing each call to take one second

  const validIds = allCharacters.map((character) => character.id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!validIds.includes(id))
        reject(`we do not have a character with the id of ${id}`);

      return resolve(allCharacters.find((character) => character.id === id));
    }, 1000);
  });
};
//! ⬆  ⬆  ⬆  ⬆ do not edit this function   ⬆  ⬆  ⬆  ⬆ ️

export const fetchAllCharactersByIds = async (ids) => {
  const arrayOfPromises =  ids.map(elem => fetchCharacterById(elem).then(val => val));

  return Promise.all(arrayOfPromises)
    .then(results => results)
    .catch(() => []);
    
}

/* 
  You need to somehow get the element.value in the returned Promise (array of objects)
  that matches the chars.id in the allCharacters array 
  and if the element.value matches the chars.id, return the names.

  1. Are we supposed to use await?
  2. Are we supposed to call the fetchCharacterById function?
  3. Can/are we supposed to use the allCharacters array?

  turn array of ids into an array of promises
  Which static promise method is the most helpful? <<< Make sure of this
  How do we handle a reject of a promise?
*/