const initSwalSuccess = (title) => {
  import("sweetalert2")
    .then((module) => module.default)
    .then((swal) => {
      swal.fire({
        position: "top-end",
        icon: "success",
        title,
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => console.error(error));
};

const initSwalError = (title) => {
  import("sweetalert2")
    .then((module) => module.default)
    .then((swal) => {
      swal.fire({
        position: "top-end",
        icon: "error",
        title,
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => console.error(error));
};

export { initSwalSuccess, initSwalError };
