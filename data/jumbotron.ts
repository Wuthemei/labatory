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
  "https://i.picsum.photos/id/842/1600/900.jpg?hmac=12NH3p2_TQiQzhnYkaQJVr3XwNDqng4-nZXbQ_CucP8",
  "https://i.picsum.photos/id/642/1600/900.jpg?hmac=Zyg1Q-Yz4L0rHReTxMQ7ffngT38Zky-r56siLMa5SMU",
  "https://i.picsum.photos/id/441/1600/900.jpg?hmac=GDnko0RbbLYfMHY7LbctM6f2hCKKdFeosCzDqMbNlmU",
  "https://i.picsum.photos/id/261/1600/900.jpg?hmac=mTGFi5tN-U_CMJ46G0OUXOmYlRy-gwuelxx8ZKVjnTc",
  "https://i.picsum.photos/id/931/1600/900.jpg?hmac=nzxfNzqISW2vrYATbyBer8zQaLvGApXc0HaP6Xu5OIA",
  "https://i.picsum.photos/id/141/1600/900.jpg?hmac=_mziYng0Iey3xJRVJbOsR42JzvEx-4krniFL4TSJDgY",
  "https://i.picsum.photos/id/864/1600/900.jpg?hmac=SXvZyArRFJuSlnjAIrXc5VFs-HRG3BI8Rzbj6qVOdjo",
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
        localeKey: "WHAT'S UP",
        link: "/tech/2021/05/30/Document-Main#Dev",
      },
      { localeKey: "GITHUB", link: "https://github.com/themeiwu/labatory/" },
    ],
  },
  {
    setName: "github",
    links: [
      {
        localeKey: "LEGACY",
        link: "https://wuthemei.github.io/",
      },
    ],
  },
];
