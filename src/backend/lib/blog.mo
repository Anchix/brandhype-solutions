import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types";

module {
  public func create(
    posts : List.List<Types.BlogPost>,
    nextId : Nat,
    input : Types.BlogPostInput,
  ) : Types.BlogPost {
    let now = Time.now();
    let post : Types.BlogPost = {
      id = nextId;
      title = input.title;
      category = input.category;
      featuredImageUrl = input.featuredImageUrl;
      content = input.content;
      excerpt = input.excerpt;
      author = input.author;
      tags = input.tags;
      publishDate = input.publishDate;
      status = input.status;
      readTime = input.readTime;
      createdAt = now;
      updatedAt = now;
    };
    posts.add(post);
    post
  };

  public func update(
    posts : List.List<Types.BlogPost>,
    id : Nat,
    input : Types.BlogPostInput,
  ) : Bool {
    let now = Time.now();
    var found = false;
    posts.mapInPlace(func(post) {
      if (post.id == id) {
        found := true;
        { post with
          title = input.title;
          category = input.category;
          featuredImageUrl = input.featuredImageUrl;
          content = input.content;
          excerpt = input.excerpt;
          author = input.author;
          tags = input.tags;
          publishDate = input.publishDate;
          status = input.status;
          readTime = input.readTime;
          updatedAt = now;
        }
      } else {
        post
      }
    });
    found
  };

  public func delete(posts : List.List<Types.BlogPost>, id : Nat) : Bool {
    let sizeBefore = posts.size();
    let filtered = posts.filter(func(post) { post.id != id });
    posts.clear();
    posts.append(filtered);
    posts.size() < sizeBefore
  };

  public func getAll(posts : List.List<Types.BlogPost>) : [Types.BlogPost] {
    posts.toArray()
  };

  public func getPublished(posts : List.List<Types.BlogPost>) : [Types.BlogPost] {
    posts.filter(func(post) { post.status == "published" }).toArray()
  };
};
