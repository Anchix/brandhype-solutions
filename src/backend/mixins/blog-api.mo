import List "mo:core/List";
import BlogLib "../lib/blog";
import Types "../types";

mixin (
  posts : List.List<Types.BlogPost>,
  blogCounter : List.List<Nat>,
) {
  public func createBlogPost(input : Types.BlogPostInput) : async Nat {
    let currentId = blogCounter.at(0);
    let post = BlogLib.create(posts, currentId, input);
    blogCounter.put(0, currentId + 1);
    post.id
  };

  public func updateBlogPost(id : Nat, input : Types.BlogPostInput) : async Bool {
    BlogLib.update(posts, id, input)
  };

  public func deleteBlogPost(id : Nat) : async Bool {
    BlogLib.delete(posts, id)
  };

  public query func getBlogPosts() : async [Types.BlogPost] {
    BlogLib.getAll(posts)
  };

  public query func getPublishedBlogPosts() : async [Types.BlogPost] {
    BlogLib.getPublished(posts)
  };
};
