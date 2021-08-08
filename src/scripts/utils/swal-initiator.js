import Swal from "sweetalert2";

const initSwalSuccess = (title) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title,
    showConfirmButton: false,
    timer: 1500,
  });
};

const initSwalError = (title) => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title,
    showConfirmButton: false,
    timer: 1500,
  });
};

export { initSwalSuccess, initSwalError };
