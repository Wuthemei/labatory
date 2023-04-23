/**
 * @name backgroundPicture
 * @description Jumbotron Cover Picture
 *
 * @hint Pic Source 1
 * @see http://wallhaven.cc/
 * Select a picture, inspect for the jpg path, download it
 * @see https://imgchr.com/
 * Upload the ORIGINAL HIGH RESOLUTION picture to this site
 * Then copy the MID RESOLUTION PICTURE path below
 *
 * @hint Pic Source 2
 * Gitee Repo
 */

const backgroundPictureLib = [
  "https://fastly.picsum.photos/id/533/1600/900.jpg?hmac=K31bvA3Eokt47NIATN_BhV6Il0J7GHY54bxTdMVvsBU",
  "https://fastly.picsum.photos/id/893/1600/900.jpg?hmac=idWpWa3JQoccmRTE_p46QiLrkLLC8wkugZ4DuFYymZo",
  "https://fastly.picsum.photos/id/80/1600/900.jpg?hmac=OMDAreG7EYCI487VcYvMch5G7rDfAjkHWWrDhGgL6xA",
  "https://fastly.picsum.photos/id/631/1600/900.jpg?hmac=vzJMve8HCycquB7nFBbshvRDWeHPPXFqnhc1Pt7yHb0",
  "https://fastly.picsum.photos/id/216/1600/900.jpg?hmac=1OLeqHqx2MAI_GMRNb1eTVwOT_j0PQSrBFnyVIFfAyg",
];

export const backgroundPicture =
  backgroundPictureLib[Math.floor(Math.random() * backgroundPictureLib.length)];

/**
 * @name jumbotronButtonSet
 * @description Jumbotron buttons
 */
export const jumbotronButtonSet: {
  setName: string;
  color?: "primary" | "secondary" | "default" | undefined;
  links: {
    localeKey: string;
    link: string;
  }[];
}[] = [
  {
    setName: "whatsup",
    color: "primary",
    links: [
      {
        localeKey: "whatsup",
        link: "/life/2022/03/10/BeforeYouTry",
      },
      { localeKey: "github", link: "https://github.com/themeiwu/labatory/" },
    ],
  },
  {
    setName: "legacy",
    links: [
      {
        localeKey: "legacy",
        link: "https://wuthemei.github.io/",
      },
    ],
  },
];
