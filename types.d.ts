
interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

 interface HomePage extends SanityBody {
  id: Key | null | undefined;
  _type: 'homepage';
  title: string;
  description: string;
  role: string;
  specialize: string;
  image: string;
}

 interface AboutSection extends SanityBody {
  id: Key | null | undefined;
  _type: 'aboutsection';
  title: string;
  description: string;
  image: string;
}

 interface FeatureSection extends SanityBody {
  [x: string]: Key | null | undefined;
  _type: 'features';
  title: string;
  content: string;
  label: string;
  href: string;
  image: string;
  color: string;
}

 interface TechStack extends SanityBody {
  _type: 'techstack';
  title: string;
  description: string;
  link: string;
  type: string;
  image: string;
}

 interface Projects extends SanityBody {
  body: any;
  _type: 'project';
  id: string;
  title: string;
  description: string;
  coverimage: Image;
  techStack: string[];
  site: string;
  block: Block[];
  slug: Slug;
}

 interface GitHubRepository {
  [x: string]: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  id: number;
  name: string;
  description: string;
  userProfile: string;
  language: string;
  isPublic: boolean;
  isTemplate: boolean;
  language?: string;
  stars: number;
}
interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  url(): any;
  _type: "image";
  asset: Reference;
}

interface Reference {
  [x: string]: string | undefined;
  _ref: "string";
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  split: (separator: string | RegExp) => string[];
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}
