import toast from "react-hot-toast";

type keyTypes = {
  name: string;
  phoneNo: string;
  email: string;
  address: string;
  password: string;
};

const keyName: keyTypes = {
  name: "Name",
  phoneNo: "Phone Number",
  email: "Email",
  address: "Address",
  password: "Password"
}


const emptyFieldCheck = (obj: any) => {
  for (let key of Object.keys(obj) as (keyof typeof obj)[]) {
    if (obj[key] === "") {
      toast.error(`${keyName[key as keyof keyTypes]} should not be empty`);
      return false; // Return false if any field is empty
    }
  }
  return true; // Return true if all fields are filled
};

const validFieldCheck = (obj: any) => {
  for (let key of Object.keys(obj)) {
    if (key === "phoneNo" && obj[key].length < 10) {
      toast.error(`Phone number should not be less than 10 digits`);
      return false; 
    }

    if (key === "password" && obj[key].length < 8) {
      toast.error(`Password should not be less than 8 characters`);
      return false; 
    }
  }
  return true; // Return true if all fields are valid
};

const fieldCheck = (obj: any) => {
  if (!emptyFieldCheck(obj)) {
    return false; // If any field is empty, return false
  }

  return validFieldCheck(obj); // If all fields are filled, check for validity
};

export { fieldCheck };
