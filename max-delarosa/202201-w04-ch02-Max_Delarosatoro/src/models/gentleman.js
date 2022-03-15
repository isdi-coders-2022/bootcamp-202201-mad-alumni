export class Gentleman {
    id;
    name;
    status;
    profession;
    twitter;
    picture;
    alternativeText;
    selected;
    constructor(
        id,
        name,
        status,
        profession,
        twitter,
        picture,
        alternativeText
    ) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.profession = profession;
        this.twitter = twitter;
        this.picture = picture;
        this.alternativeText = alternativeText;
        this.selected = false;
    }
}
