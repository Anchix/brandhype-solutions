import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: bigint;
    status: string;
    title: string;
    content: string;
    publishDate: string;
    createdAt: bigint;
    tags: Array<string>;
    author: string;
    readTime: string;
    updatedAt: bigint;
    featuredImageUrl: string;
    excerpt: string;
    category: string;
}
export interface ContactSubmission {
    id: bigint;
    service: string;
    name: string;
    submittedAt: bigint;
    email: string;
    message: string;
    phone: string;
}
export interface BlogPostInput {
    status: string;
    title: string;
    content: string;
    publishDate: string;
    tags: Array<string>;
    author: string;
    readTime: string;
    featuredImageUrl: string;
    excerpt: string;
    category: string;
}
export interface backendInterface {
    createBlogPost(input: BlogPostInput): Promise<bigint>;
    deleteBlogPost(id: bigint): Promise<boolean>;
    getBlogPosts(): Promise<Array<BlogPost>>;
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getPublishedBlogPosts(): Promise<Array<BlogPost>>;
    submitContactForm(name: string, email: string, phone: string, service: string, message: string): Promise<bigint>;
    updateBlogPost(id: bigint, input: BlogPostInput): Promise<boolean>;
}
