export type CarouselItem = {
  id: number;
  heading: string;
  title: string;
  description: string;
  image: string;
  primary_button_label?: string;
  primary_button_link?: string;
  secondary_button_label?: string;
  secondary_button_link?: string;
};

export type CarouselGroup = {
  id: number;
  items: CarouselItem[];
};

export type AboutCategory = {
  id: number;
  intro: string;
  description: string;
};

export type AboutSection = {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  content: string;
  is_who_we_are: boolean;
  is_what_we_do: boolean;
  about_categories: AboutCategory;
};

export type Network = {
  id: number;
  name: string;
  image: string;
  link: string;
};

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  is_bod_team: boolean;
  is_administrative: boolean;
  is_adivisor: boolean;
};

export type BlogPost = {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  author: number;
  created_at: string;
  updated_at: string;
};

export type AlbumImage = {
  id: number;
  image: string;
};

export type Album = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  images: AlbumImage[];
};

export type VideoLink = {
  id: number;
  title: string;
  video_link: string;
};

export type Events = {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
};

export type Stories = {
  id: number;
  title: string;
  sub_title: string;
  image: string;
  description: string;
  created_at: string;
};

export type Milestone = {
  id: number;
  name: string;
  count: string;
  description: string;
  is_reached: boolean;
  is_statistics: boolean;
};

export type Document = {
  id: number;
  title: string;
  attchments: string;
  created_at: string;
};

export type Carrier = {
  id: number;
  name: string;
  description: string;
  upload_document: string;
  created_at: string;
};

export type TermsCondition = {
  id: number;
  title: string;
  content: string;
};
