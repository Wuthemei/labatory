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
  "/public/img/bk1",
  "/public/img/bk2",
  "/public/img/bk3",
  "/public/img/bk4",
  "/public/img/bk5",
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
        localeKey: "N-POST",
        link: "/tech/2021/05/30/Document-Main#Dev",
      },
      { localeKey: "demo", link: "https://szhshp.org" },
      {
        localeKey: "N-PIC",
        link: "/tech/2021/05/30/Document-Main",
      },
    ],
  },
];
