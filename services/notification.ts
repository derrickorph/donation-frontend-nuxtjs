import Swal from "sweetalert2"

export default function useAlertNotification() {

    const successSweetAlert = (title: string, text: string) => {
      Swal.fire({
        title,
        text,
        icon: "success",
        customClass: {
          confirmButton: "btn btn-success btn-sm",
        },
        buttonsStyling: false,
        timer: 1500,
      });
    };
    const errorSweetAlert = (title: string, text: string) => {
      Swal.fire({
        title,
        text,
        icon: "error",
        customClass: {
          confirmButton: "btn btn-danger btn-sm",
        },
        buttonsStyling: false,
      });
    };

    
    return {
      errorSweetAlert,
      successSweetAlert,
    };
}

