# Contributing to the ZipCode Website

## Club Members

Club members are allowed (and encouraged!) to open pull requests to manage their profile on the website. The simplest way to do so is to add an entry to the roster data in `public/data/roster.json`. By adding a JSON object to that file with the following structure:

```json
    {
        "name": "John Doe",
        "major": "Computer Science",
        "graduationYear": 2026,
        "isOfficer": false,
        "title": "Member",
        "pfp": "/public/assets/pfp/john_doe_profile_pic.jpeg",
        "uaNetId": "jed2"
    },
```

If you provide a path to a profile picture in the `pfp` key, then it is expected that your pull request will also add a club appropriate profile picture at that path. Profile pictures that are not in the `public/assets/pfp/` directory will result in a denial of the pull request for the sake of keeping the file structure neat.
