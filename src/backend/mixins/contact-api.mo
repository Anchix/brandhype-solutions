import List "mo:core/List";
import ContactLib "../lib/contact";
import Types "../types";

mixin (
  submissions : List.List<Types.ContactSubmission>,
  contactCounter : List.List<Nat>,
) {
  public func submitContactForm(
    name : Text,
    email : Text,
    phone : Text,
    service : Text,
    message : Text,
  ) : async Nat {
    let currentId = contactCounter.at(0);
    let submission = ContactLib.submit(submissions, currentId, name, email, phone, service, message);
    contactCounter.put(0, currentId + 1);
    submission.id
  };

  public query func getContactSubmissions() : async [Types.ContactSubmission] {
    ContactLib.getAll(submissions)
  };
};
