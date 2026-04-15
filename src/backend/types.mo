module {
  public type BlogPost = {
    id : Nat;
    title : Text;
    category : Text;
    featuredImageUrl : Text;
    content : Text;
    excerpt : Text;
    author : Text;
    tags : [Text];
    publishDate : Text;
    status : Text;
    readTime : Text;
    createdAt : Int;
    updatedAt : Int;
  };

  public type BlogPostInput = {
    title : Text;
    category : Text;
    featuredImageUrl : Text;
    content : Text;
    excerpt : Text;
    author : Text;
    tags : [Text];
    publishDate : Text;
    status : Text;
    readTime : Text;
  };

  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    service : Text;
    message : Text;
    submittedAt : Int;
  };
};
