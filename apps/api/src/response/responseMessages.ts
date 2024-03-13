export const OK_ResponseMessage: { [key: string]: string } = {
  // Misc
  Success: "Success",

  // Authentication Success Messages
  "Signup Success": "Your signup was successful.",
  "Login Success": "You have successfully logged in.",
  "Logout Success": "You have been successfully logged out.",

  // S3 (Storage) Success Messages
  "S3 Upload Success": "File uploaded successfully.",
  "S3 Delete Success": "File deleted successfully.",

  // Product Success Messages
  "Event Created": "Event created successfully.",
  "Event Updated": "Event updated successfully.",
  "Event Deleted": "Event deleted successfully.",
};

export const NotOK_ResponseMessage: { [key: string]: string } = {
  // Authentication Error Messages
  "Wrong Creds": "Incorrect username or password.",
  "No Account Found": "No account found with Provided credentials.",
  "Account Already Exists":
    "An account with this Email already exists, If You have any problem regarding your account please contact us. or you can login with this Email.",
  "Signup Failed": "Failed to create an account.",
  "Login Failed": "Login failed. Please check your credentials.",

  // Unexpected Error Messages
  Unauthorized: "Unauthorized access. Please login.",
  Forbidden: "Access to this resource is forbidden.",
  "Not Found": "The requested resource was not found.",
  "Internal Server Error": "Internal server error. Please try again later.",
  "Something went wrong": "Something unexpected happened. Please try again.",
};
// Validation Error Messages
