export class User {
  userName;

  password;

  profileImage;

  constructor(userName = "", password = "", profileImage = "") {
    this.userName = userName;
    this.password = password;
    this.profileImage = profileImage;
  }
}
