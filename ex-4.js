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
function display(data) {
  console.log(data);
}
async function getProfile() {
  try {
    const johnData = await getJohnProfile();
    display(johnData);
  } catch (error) {
    display(error);
  }
}
getProfile();
