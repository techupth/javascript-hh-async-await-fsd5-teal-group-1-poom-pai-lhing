// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
const asynchronousFunction = async () => {
  try {
    const success = await getJohnProfile();
    console.log(success);
  } catch (error) {
    console.log(error);
  }
};

asynchronousFunction();
