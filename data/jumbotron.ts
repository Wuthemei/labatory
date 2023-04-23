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
