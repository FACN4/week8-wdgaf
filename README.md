# FAC Portal by Suha, Ben & Matt

This week we have built a FAC portal to connect local FACN students to our local recruitment partners, Kav Mashve. The site provides a list of graduates from FACN4 along with a specific profile page for each student and a contact button.

## Preparation

### Wireframes

![](https://i.imgur.com/uZTcyDS.png)

## New Code

This week we used express and handlebars for the first time. We found the following code particularly interesting:

### Checking an object for matching profile

We looped through arrays in our weekly workshop, using forEach and .contains however looping through an object was slightly more complicated. We used a ForEach to record if the name from the URL matched an object, exist became true if so and we stored the index of the object in tmp in order to send the correct student in res.render()

```javascript
  const { getUserData } = require('../model/getUserData');

exports.get = (req, res, next) => {
  getUserData((err, profiles) => {
    if (err) {
      return res.render('error');
    }
    const { eachGraduate } = req.params;
    let exist = false;
    let tmp = 0;
    profiles.forEach((user, index) => {
      if (user.first_name.toLowerCase() == eachGraduate) {
        exist = true;
        tmp = index;
      }
    });
    if (exist) {
      return res.render('profiles', {
        profiles: profiles[tmp],
        title: `${profiles[tmp].first_name} ${profiles[tmp].surname} - FAC Graduate - FAC Portal`,
      });
    }
    next();
  });
};
```

### Template Literals in Title Tag

We used template literals in the eachGraduate.js file when rendering the page, allowing us to give a customised title tag.

``` javascript
title: `${profiles[tmp].first_name} ${profiles[tmp].surname} - FAC Graduate - FAC Portal`,
```

![](https://i.imgur.com/U2ccqZj.png)

## Our GIT Flow

Last week we had a slight problem with people working on the same issues. Mynah suggested using GitHUB as our main point of communication, despite the fact we are sat next to each other in the room. We did the following, which helped our productivity and avoid duplicate effort:

### Always assign yourself to what you're working on 

![](https://i.imgur.com/gzZYUHF.png)

### 'Sprint' Checklists and individual issues for each task

![](https://i.imgur.com/RqYXjih.png)






