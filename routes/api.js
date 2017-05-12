var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/photos', function (req, res, next) {
  res.json(
    {
      "schools": [
        {
          "events": [
            {
              "subjects": [
                {
                  "subjectId": 2,
                  "photos": [
                    {
                      "photoSessionKey": "63D9CAF5",
                      "guid": "6bde808e-fbe4-4fcd-a49f-f4fd2bef07aa",
                      "url": "https://image.ibb.co/h1nHvk/Png_Test_912x1368.jpg",
                      "createDateTime": null,
                      "photoKey": null
                    },
                    {
                      "photoSessionKey": "63D9CAF5",
                      "guid": "6bde808e-fbe4-4fcd-a49f-f4fd2bef07bb",
                      "url": "https://image.ibb.co/h1nHvk/Png_Test_912x1368.jpg",
                      "createDateTime": null,
                      "photoKey": null
                    },
                    {
                      "photoSessionKey": "63D9CAF5",
                      "guid": "6bde808e-fbe4-4fcd-a49f-f4fd2bef08cc",
                      "url": "https://image.ibb.co/h1nHvk/Png_Test_912x1368.jpg",
                      "createDateTime": null,
                      "photoKey": null
                    }
                  ],
                  "name": "Joe Smith"
                },
                {
                  "subjectId": 4,
                  "photos": [
                    {
                      "photoSessionKey": "A2DE06F4",
                      "guid": "6bde808e-fbe4-4fcd-a49f-f4fd2bef08cc",
                      "url": "https://image.ibb.co/h1nHvk/Png_Test_912x1368.jpg",
                      "createDateTime": null,
                      "photoKey": null
                    }
                  ],
                  "name": "Jenny Smith"
                },
                {
                  "subjectId": 8,
                  "photos": [
                    {
                      "photoSessionKey": "F618FAC2",
                      "guid": "6bde808e-fbe4-4fcd-a49f-f4fd2bef08cc",
                      "url": "https://image.ibb.co/h1nHvk/Png_Test_912x1368.jpg",
                      "createDateTime": null,
                      "photoKey": null
                    }
                  ],
                  "name": "Joe Smith"
                },
                {
                  "subjectId": 10,
                  "photos": [
                    {
                      "photoSessionKey": "6EAA47AE",
                      "guid": "6bde808e-fbe4-4fcd-a49f-f4fd2bef08cc",
                      "url": "https://image.ibb.co/h1nHvk/Png_Test_912x1368.jpg",
                      "createDateTime": null,
                      "photoKey": null
                    }
                  ],
                  "name": "Jenny Smith"
                }
              ],
              "key": "ABCDEF",
              "name": "A Test Event"
            }
          ],
          "number": 1062745,
          "name": "Edina High School"
        },
        {
          "events": [
            {
              "subjects": [
                {
                  "subjectId": 2,
                  "photos": [
                    {
                      "photoSessionKey": "026566C3",
                      "guid": "6bde808e-fbe4-4fcd-a49f-f4fd2bef08cc",
                      "url": "https://image.ibb.co/h1nHvk/Png_Test_912x1368.jpg",
                      "createDateTime": null,
                      "photoKey": null
                    }
                  ],
                  "name": "Joe Smith"
                },
                {
                  "subjectId": 4,
                  "photos": [

                  ],
                  "name": "Jenny Smith"
                }
              ],
              "key": "Clinton1",
              "name": "A Test Event"
            }
          ],
          "number": 1052149,
          "name": "Clinton High School"
        }
      ]
    }
  );
});

module.exports = router;