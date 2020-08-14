export type INav = {
  classProp: string | undefined;
  setPlayDrawerAnimation?: undefined | React.Dispatch<React.SetStateAction<boolean>>;
}
export type ILearnMore = {
  header: string;
  paragraph: string;
  button: string;
  src: string;
  alt?: string | undefined;
}
export type IHAndP = {
  header: string;
  paragraph: string;
}
export type ITestimonialTemplate = {
  paragraph: string;
  user: {
    image: string;
    name: string;
    company: string;
  }
}
export type IBannerHalf = {
  bannerText: string;
  bannerUrl: string;
}