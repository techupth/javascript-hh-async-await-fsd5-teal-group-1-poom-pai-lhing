//Exercise #2
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
function success(data) {
  console.log(data);
}
function error(error) {
  console.log(error);
}
getJohnProfile().then(success).catch(error);
