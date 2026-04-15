import List "mo:core/List";
import Types "types";
import BlogApi "mixins/blog-api";
import ContactApi "mixins/contact-api";

actor {
  let posts = List.empty<Types.BlogPost>();
  let blogCounter = List.singleton<Nat>(0);

  let submissions = List.empty<Types.ContactSubmission>();
  let contactCounter = List.singleton<Nat>(0);

  include BlogApi(posts, blogCounter);
  include ContactApi(submissions, contactCounter);
};
