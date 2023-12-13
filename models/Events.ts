export interface Event {
  name: string;
  images: ImageData[];
}

export interface ImageData {
  date: string;
  url: string;
  caption: string;
}

export interface Events {
  events: Event[];
}
