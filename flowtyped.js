/* @flow */

export type Id = string;

export type MediaType =
  | "Application"
  | "Dataset"
  | "Image"
  | "Sound"
  | "Text"
  | "Video";

export type TextualType = "Text" | "Dataset";

export type Thumbnail = Array<{
  id?: Id,
  type?: "Image",
  format?: Id
}>;

export type Label = string;

export type Metadata = Array<{
  label?: string,
  value?: string
}>;

export type Summary = string;

export type NavDate = string;

export type Attribution = string;

export type Rights = {
  id?: Id,
  type?: TextualType,
  format?: Id
};

export type Logo = {
  id?: Id
};

export type Language = Array<string>;

export type Profile = string;

export type Height = number;

export type Width = number;

export type Duration = number;

export type Format = string;

export type ViewingDirection =
  | "left-to-right"
  | "right-to-left"
  | "top-to-bottom"
  | "bottom-to-top";

export type Behavior = Array<
  | "individuals"
  | "paged"
  | "continuous"
  | "multi-part"
  | "non-paged"
  | "facing-pages"
  | "none"
  | "no-nav"
  | "thumbnail-nav"
  | "auto-advance"
  | "together"
>;

export type TimeMode = "trim" | "scale" | "loop";

export type Related = {
  id?: Id,
  type?: MediaType,
  label?: Label,
  format?: Format
};

export type Rendering = {
  id?: Id,
  type?: MediaType,
  label?: Label,
  format?: Format
};

export type Service = {
  id?: Id,
  type?: "Service",
  profile?: Profile
};

export type SeeAlso = {
  id?: Id,
  type?: MediaType,
  label?: Label,
  format?: Format
};

export type Within = {
  id?: Id,
  type?: MediaType,
  label?: Label
};

export type StartCanvas = {
  id?: Id,
  type?: "Canvas"
};

export type Includes = {
  id?: Id,
  type?: MediaType
};

export type First = {
  id?: Id,
  type?: MediaType,
  label?: Label
};

export type Last = {
  id?: Id,
  type?: MediaType,
  label?: Label
};

export type Total = number;

export type Next = {
  id?: Id,
  type?: "Collection" | "AnnotationPage"
};

export type Prev = {
  id?: Id,
  type?: "Collection" | "AnnotationPage"
};

export type StartIndex = number;

export type AnnotationPage = {
  id?: Id,
  type?: "AnnotationPage",
  items?: Array<Annotation>,
  partOf?: {
    type?: "AnnotationCollection",
    id?: Id,
    label?: Label,
    first?: First,
    last?: Last,
    rights?: Rights,
    attribution?: Attribution,
    logo?: Logo
  }
};

export type Annotation = {
  id?: Id,
  type?: "Annotation",
  motivation?: string,
  body?: {
    type?: MediaType,
    value?: string,
    format?: Format,
    service?: Service,
    height?: Height,
    width?: Width
  },
  target?: {
    id?: Id,
    type?: MediaType
  }
};

export type Range = {
  id?: Id,
  type?: "Range",
  label?: Label,
  includes?: Includes,
  items?: Array<{
    id?: Id,
    type?: "Canvas"
  }>
};

export type Manifest = {
  context?: Array<string>,
  id?: Id,
  type?: "Manifest",
  label?: Label,
  metadata?: Metadata,
  summary?: Summary,
  thumbnail?: Thumbnail,
  viewingDirection?: ViewingDirection,
  behavior?: Behavior,
  navDate?: NavDate,
  rights?: Rights,
  attribution?: Attribution,
  logo?: Logo,
  related?: Related,
  service?: Service,
  seeAlso?: SeeAlso,
  rendering?: Rendering,
  within?: Within,
  startCanvas?: StartCanvas,
  items?: Array<{
    id?: Id,
    type?: "Sequence",
    label?: Label,
    viewingDirection?: ViewingDirection,
    behavior?: Behavior,
    startCanvas?: StartCanvas,
    items?: Array<{
      id?: Id,
      type?: "Canvas",
      label?: Label,
      height?: Height,
      width?: Width,
      duration?: Duration,
      items?: Array<AnnotationPage>,
      annotations?: Array<AnnotationPage>
    }>
  }>,
  structure?: Array<Range>
};
