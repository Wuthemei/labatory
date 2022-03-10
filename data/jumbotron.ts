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
  "https://s1.ax1x.com/2022/03/11/b5mnS0.jpg",
  "https://i.picsum.photos/id/429/1600/900.jpg?hmac=dfkcm3X3VSQD8iKwMNx4Y6tWkpBqgs7ZGBISdk511Ww",
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
    setName: "tour",
    color: "primary",
    links: [
      {
        localeKey: "whatsnew",
        link: "/tech/2021/05/30/Document-Main#Dev",
      },
      { localeKey: "demo", link: "https://szhshp.org" },
      {
        localeKey: "documents",
        link: "/tech/2021/05/30/Document-Main",
      },
    ],
  },
  {
    setName: "github",
    links: [
      {
        localeKey: "github",
        link: "https://github.com/szhshp/NextJS-BlogTemplate-ProjectTitan",
      },
    ],
  },
];
