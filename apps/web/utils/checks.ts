import toast from "react-hot-toast";

const emptyFieldCheck = (obj: any) => {
  Object.keys(obj).map((key) => {
    console.log(obj[key]);

    if (obj[key] == "") {
      toast.error(`${key} should not be empty`);
      return;
    }
    if (`${key}` == "phoneNo") {
      if (obj[key].length < 10) {
        toast.error(`${key} should not be less than 10 digits`);
        return false;
      }
    }

    if (`${key}` == "password") {
      if (obj[key].length < 8) {
        toast.error(`${key} should not be less than 8 digits`);
        return false;
      }
    }
  });

  return true;
};

export { emptyFieldCheck };
