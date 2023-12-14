// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
function display(data) {
  console.log(data);
}
async function getProfile() {
  try {
    const johnProfile = await getJohnProfile();
    display(johnProfile);
  } catch (error) {
    display(error);
  }
}
getProfile();
