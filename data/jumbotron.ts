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
  "https://i.picsum.photos/id/140/1600/900.jpg?hmac=qp3MWl0zuiUST9gyWtaj3meUReR_BXp_pVz_4UGGF_M",
  "https://i.picsum.photos/id/989/1600/900.jpg?hmac=3afQuJFJg_WG_pvhdmb2jJNlkbB4p-3DtHhASkRv63o",
  "https://i.picsum.photos/id/657/1600/900.jpg?hmac=zRm3_FNQOTU9sSENNp9AlYofiJzwy23UPTHW50PDrJ0",
  "https://i.picsum.photos/id/277/1600/900.jpg?hmac=qrh2_ubsgjQPkjvsXve4MHFhoLO-lBCjwu3fbmlRn50",
  "https://i.picsum.photos/id/211/1600/900.jpg?hmac=uuP7MUt6qSxdCfvx4ZZCSdkCUzvnmoGBrsV3ln-9gQ8",
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
        localeKey: "legacy",
        link: " https://wuthemei.github.io/",
      },
    ],
  },
];
