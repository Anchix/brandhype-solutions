import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types";

module {
  public func submit(
    submissions : List.List<Types.ContactSubmission>,
    nextId : Nat,
    name : Text,
    email : Text,
    phone : Text,
    service : Text,
    message : Text,
  ) : Types.ContactSubmission {
    let submission : Types.ContactSubmission = {
      id = nextId;
      name;
      email;
      phone;
      service;
      message;
      submittedAt = Time.now();
    };
    submissions.add(submission);
    submission
  };

  public func getAll(submissions : List.List<Types.ContactSubmission>) : [Types.ContactSubmission] {
    submissions.toArray()
  };
};
