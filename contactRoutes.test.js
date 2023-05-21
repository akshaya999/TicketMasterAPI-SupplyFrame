// import supertest from 'supertest'
// import { request } from 'express'

// routes = require("./routes/contactRoutes.js")

// describe("get /events_details/:id",()=>{
//     test("should respons with status 200 OK", async ()=>{
//         const response = request(app).get("/events_details/Z7r9jZ1AdpZxA")
//     })
// })

const express = require('express');
const request = require('supertest');
const router = require("./routes/contactRoutes.js"); //
let axios = require('axios');

jest.mock('axios');

describe('Express Router', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(router);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('GET / should send the form.html file', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  test('GET /events_details/:id should make an API request and send the response', async () => {
    const mockData = {
      "name": "Los Angeles Dodgers vs. Colorado Rockies",
      "type": "event",
      "id": "Z7r9jZ1AdpZxA",
      "test": false,
      "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdpZxA",
      "locale": "en-us",
      "images": [
          {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
              "width": 100,
              "height": 56,
              "fallback": false
          },
          {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
              "width": 640,
              "height": 360,
              "fallback": false
          },
          {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
              "width": 1024,
              "height": 576,
              "fallback": false
          },
          {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
              "width": 1136,
              "height": 639,
              "fallback": false
          },
          {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
              "width": 205,
              "height": 115,
              "fallback": false
          },
          {
              "ratio": "3_2",
              "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
              "width": 640,
              "height": 427,
              "fallback": false
          },
          {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              "width": 2048,
              "height": 1152,
              "fallback": false
          },
          {
              "ratio": "3_2",
              "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
              "width": 1024,
              "height": 683,
              "fallback": false
          },
          {
              "ratio": "4_3",
              "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
              "width": 305,
              "height": 225,
              "fallback": false
          },
          {
              "ratio": "3_2",
              "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
              "width": 305,
              "height": 203,
              "fallback": false
          }
      ],
      "sales": {
          "public": {
              "startDateTime": "1900-01-01T18:00:00Z",
              "startTBD": false,
              "startTBA": false,
              "endDateTime": "2023-08-13T01:10:00Z"
          }
      },
      "dates": {
          "start": {
              "localDate": "2023-08-12",
              "localTime": "18:10:00",
              "dateTime": "2023-08-13T01:10:00Z",
              "dateTBD": false,
              "dateTBA": false,
              "timeTBA": false,
              "noSpecificTime": false
          },
          "status": {
              "code": "onsale"
          },
          "spanMultipleDays": false
      },
      "classifications": [
          {
              "primary": true,
              "segment": {
                  "id": "KZFzniwnSyZfZ7v7nE",
                  "name": "Sports"
              },
              "genre": {
                  "id": "KnvZfZ7vAdv",
                  "name": "Baseball"
              },
              "subGenre": {
                  "id": "KZazBEonSMnZfZ7vF1n",
                  "name": "MLB"
              },
              "family": false
          }
      ],
      "outlets": [
          {
              "url": "https://www.mlb.com/dodgers",
              "type": "venueBoxOffice"
          },
          {
              "url": "https://www.ticketmaster.com/los-angeles-dodgers-vs-colorado-rockies-los-angeles-california-08-12-2023/event/Zu0FM1R0e5tg0W5",
              "type": "tmMarketPlace"
          }
      ],
      "seatmap": {
          "staticUrl": "https://content.resale.ticketmaster.com/graphics/TMResale/1/VenueMaps/475-481-3-0-DodgerStadiumLADodgers.png"
      },
      "_links": {
          "self": {
              "href": "/discovery/v2/events/Z7r9jZ1AdpZxA?locale=en-us"
          },
          "attractions": [
              {
                  "href": "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us"
              },
              {
                  "href": "/discovery/v2/attractions/K8vZ91718y0?locale=en-us"
              }
          ],
          "venues": [
              {
                  "href": "/discovery/v2/venues/Z6r9jZAFke?locale=en-us"
              }
          ]
      },
      "_embedded": {
          "venues": [
              {
                  "name": "Dodger Stadium",
                  "type": "venue",
                  "id": "Z6r9jZAFke",
                  "test": false,
                  "locale": "en-us",
                  "postalCode": "90012",
                  "timezone": "America/Los_Angeles",
                  "city": {
                      "name": "Los Angeles"
                  },
                  "state": {
                      "name": "California",
                      "stateCode": "CA"
                  },
                  "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                  },
                  "address": {
                      "line1": "1000 Elysian Park Ave."
                  },
                  "location": {
                      "longitude": "-118.2388",
                      "latitude": "34.0658"
                  },
                  "dmas": [
                      {
                          "id": 324
                      }
                  ],
                  "upcomingEvents": {
                      "_total": 60,
                      "tmr": 58,
                      "ticketmaster": 2,
                      "_filtered": 0
                  },
                  "_links": {
                      "self": {
                          "href": "/discovery/v2/venues/Z6r9jZAFke?locale=en-us"
                      }
                  }
              }
          ],
          "attractions": [
              {
                  "name": "Los Angeles Dodgers",
                  "type": "attraction",
                  "id": "K8vZ9171oA0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
                  "locale": "en-us",
                  "externalLinks": {
                      "twitter": [
                          {
                              "url": "https://twitter.com/Dodgers"
                          }
                      ],
                      "wiki": [
                          {
                              "url": "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers"
                          }
                      ],
                      "facebook": [
                          {
                              "url": "https://www.facebook.com/Dodgers/"
                          }
                      ],
                      "instagram": [
                          {
                              "url": "https://www.instagram.com/dodgers/"
                          }
                      ],
                      "homepage": [
                          {
                              "url": "https://www.mlb.com/dodgers"
                          }
                      ]
                  },
                  "aliases": [
                      "dodgers baseball",
                      "los angeles dodgers",
                      "la dodgers"
                  ],
                  "images": [
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RECOMENDATION_16_9.jpg",
                          "width": 100,
                          "height": 56,
                          "fallback": false
                      },
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_16_9.jpg",
                          "width": 640,
                          "height": 360,
                          "fallback": false
                      },
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_16_9.jpg",
                          "width": 1024,
                          "height": 576,
                          "fallback": false
                      },
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_LANDSCAPE_16_9.jpg",
                          "width": 1136,
                          "height": 639,
                          "fallback": false
                      },
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_EVENT_DETAIL_PAGE_16_9.jpg",
                          "width": 205,
                          "height": 115,
                          "fallback": false
                      },
                      {
                          "ratio": "3_2",
                          "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg",
                          "width": 640,
                          "height": 427,
                          "fallback": false
                      },
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                          "width": 2048,
                          "height": 1152,
                          "fallback": false
                      },
                      {
                          "ratio": "3_2",
                          "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_TABLET_LANDSCAPE_3_2.jpg",
                          "width": 1024,
                          "height": 683,
                          "fallback": false
                      },
                      {
                          "ratio": "4_3",
                          "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_CUSTOM.jpg",
                          "width": 305,
                          "height": 225,
                          "fallback": false
                      },
                      {
                          "ratio": "3_2",
                          "url": "https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_ARTIST_PAGE_3_2.jpg",
                          "width": 305,
                          "height": 203,
                          "fallback": false
                      }
                  ],
                  "classifications": [
                      {
                          "primary": true,
                          "segment": {
                              "id": "KZFzniwnSyZfZ7v7nE",
                              "name": "Sports"
                          },
                          "genre": {
                              "id": "KnvZfZ7vAdv",
                              "name": "Baseball"
                          },
                          "subGenre": {
                              "id": "KZazBEonSMnZfZ7vF1n",
                              "name": "MLB"
                          },
                          "type": {
                              "id": "KZAyXgnZfZ7v7l1",
                              "name": "Group"
                          },
                          "subType": {
                              "id": "KZFzBErXgnZfZ7vA7d",
                              "name": "Team"
                          },
                          "family": false
                      }
                  ],
                  "upcomingEvents": {
                      "_total": 115,
                      "tmr": 96,
                      "ticketmaster": 19,
                      "_filtered": 0
                  },
                  "_links": {
                      "self": {
                          "href": "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us"
                      }
                  }
              },
              {
                  "name": "Colorado Rockies",
                  "type": "attraction",
                  "id": "K8vZ91718y0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/colorado-rockies-tickets/artist/805926",
                  "locale": "en-us",
                  "externalLinks": {
                      "twitter": [
                          {
                              "url": "https://twitter.com/Rockies"
                          }
                      ],
                      "wiki": [
                          {
                              "url": "https://en.wikipedia.org/wiki/Colorado_Rockies"
                          }
                      ],
                      "facebook": [
                          {
                              "url": "https://www.facebook.com/Rockies"
                          }
                      ],
                      "instagram": [
                          {
                              "url": "https://www.instagram.com/rockies"
                          }
                      ],
                      "homepage": [
                          {
                              "url": "https://www.mlb.com/rockies"
                          }
                      ]
                  },
                  "images": [
                      {
                          "ratio": "3_2",
                          "url": "https://s1.ticketm.net/dam/a/00a/db7db318-0e27-4def-9c7c-5985e1eca00a_1343951_RETINA_PORTRAIT_3_2.jpg",
                          "width": 640,
                          "height": 427,
                          "fallback": false
                      },
                      {
                          "ratio": "3_2",
                          "url": "https://s1.ticketm.net/dam/a/00a/db7db318-0e27-4def-9c7c-5985e1eca00a_1343951_TABLET_LANDSCAPE_3_2.jpg",
                          "width": 1024,
                          "height": 683,
                          "fallback": false
                      },
                      {
                          "ratio": "4_3",
                          "url": "https://s1.ticketm.net/dam/a/00a/db7db318-0e27-4def-9c7c-5985e1eca00a_1343951_CUSTOM.jpg",
                          "width": 305,
                          "height": 225,
                          "fallback": false
                      },
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/00a/db7db318-0e27-4def-9c7c-5985e1eca00a_1343951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                          "width": 2048,
                          "height": 1152,
                          "fallback": false
                      },
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/00a/db7db318-0e27-4def-9c7c-5985e1eca00a_1343951_TABLET_LANDSCAPE_16_9.jpg",
                          "width": 1024,
                          "height": 576,
                          "fallback": false
                      },
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/00a/db7db318-0e27-4def-9c7c-5985e1eca00a_1343951_RETINA_LANDSCAPE_16_9.jpg",
                          "width": 1136,
                          "height": 639,
                          "fallback": false
                      },
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/00a/db7db318-0e27-4def-9c7c-5985e1eca00a_1343951_EVENT_DETAIL_PAGE_16_9.jpg",
                          "width": 205,
                          "height": 115,
                          "fallback": false
                      },
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/00a/db7db318-0e27-4def-9c7c-5985e1eca00a_1343951_RECOMENDATION_16_9.jpg",
                          "width": 100,
                          "height": 56,
                          "fallback": false
                      },
                      {
                          "ratio": "16_9",
                          "url": "https://s1.ticketm.net/dam/a/00a/db7db318-0e27-4def-9c7c-5985e1eca00a_1343951_RETINA_PORTRAIT_16_9.jpg",
                          "width": 640,
                          "height": 360,
                          "fallback": false
                      },
                      {
                          "ratio": "3_2",
                          "url": "https://s1.ticketm.net/dam/a/00a/db7db318-0e27-4def-9c7c-5985e1eca00a_1343951_ARTIST_PAGE_3_2.jpg",
                          "width": 305,
                          "height": 203,
                          "fallback": false
                      }
                  ],
                  "classifications": [
                      {
                          "primary": true,
                          "segment": {
                              "id": "KZFzniwnSyZfZ7v7nE",
                              "name": "Sports"
                          },
                          "genre": {
                              "id": "KnvZfZ7vAdv",
                              "name": "Baseball"
                          },
                          "subGenre": {
                              "id": "KZazBEonSMnZfZ7vF1n",
                              "name": "MLB"
                          },
                          "type": {
                              "id": "KZAyXgnZfZ7v7l1",
                              "name": "Group"
                          },
                          "subType": {
                              "id": "KZFzBErXgnZfZ7vA7d",
                              "name": "Team"
                          },
                          "family": false
                      }
                  ],
                  "upcomingEvents": {
                      "_total": 116,
                      "tmr": 43,
                      "ticketmaster": 73,
                      "_filtered": 0
                  },
                  "_links": {
                      "self": {
                          "href": "/discovery/v2/attractions/K8vZ91718y0?locale=en-us"
                      }
                  }
              }
          ]
      }
  };
    axios.get.mockResolvedValueOnce({ data: mockData });

    const response = await request(app).get('/events_details/Z7r9jZ1AdpZxA');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData);
  })
  


test('GET /events/:keyword/:segmentID/:radius/:unit/:geopoint should make an API request and send the response', async () => {
  const mockData1 = {
    "_embedded": {
        "events": [
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad8xkd",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad8xkd",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T06:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-06-04T03:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-06-03",
                        "localTime": "20:00:00",
                        "dateTime": "2023-06-04T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-06-03-2023/event/Zu0FM1R0e5taWYt",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad8xkd?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad3fjs",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad3fjs",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T06:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-05-26T03:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-05-25",
                        "localTime": "20:00:00",
                        "dateTime": "2023-05-26T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-05-25-2023/event/Zu0FM1R0e5t7lRz",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad3fjs?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad3fjz",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad3fjz",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T06:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-05-27T03:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-05-26",
                        "localTime": "20:00:00",
                        "dateTime": "2023-05-27T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-05-26-2023/event/Zu0FM1R0e5t7lRT",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad3fjz?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad8x-F",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad8x-F",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T06:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-05-28T03:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-05-27",
                        "localTime": "20:00:00",
                        "dateTime": "2023-05-28T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-05-27-2023/event/Zu0FM1R0e5taWZ8",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad8x-F?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad3fjS",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad3fjS",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T06:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-06-02T03:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-06-01",
                        "localTime": "20:00:00",
                        "dateTime": "2023-06-02T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-06-01-2023/event/Zu0FM1R0e5t7lRq",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad3fjS?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ado01a",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ado01a",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T06:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-05-21T21:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-05-21",
                        "localTime": "14:00:00",
                        "dateTime": "2023-05-21T21:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-05-21-2023/event/Zu0FM1R0e5tVveJ",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ado01a?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ado013",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ado013",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T06:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-06-04T21:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-06-04",
                        "localTime": "14:00:00",
                        "dateTime": "2023-06-04T21:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-06-04-2023/event/Zu0FM1R0e5tVve7",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ado013?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad3fjg",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad3fjg",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T06:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-06-02T18:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-06-02",
                        "localTime": "11:00:00",
                        "dateTime": "2023-06-02T18:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-06-02-2023/event/Zu0FM1R0e5t7lRi",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad3fjg?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1AdO9J7",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdO9J7",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T06:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-10-06T02:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-05",
                        "localTime": "19:00:00",
                        "dateTime": "2023-10-06T02:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-05-2023/event/Zu0FM1R0e5t_1fF",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1AdO9J7?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad-KAA",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad-KAA",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T06:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-10-08T03:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-07",
                        "localTime": "20:00:00",
                        "dateTime": "2023-10-08T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-07-2023/event/Zu0FM1R0e5tZ455",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad-KAA?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad-KAP",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad-KAP",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T18:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-10-08T21:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-08",
                        "localTime": "14:00:00",
                        "dateTime": "2023-10-08T21:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-08-2023/event/Zu0FM1R0e5tZ45Q",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad-KAP?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Adx6k8",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Adx6k8",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startTBD": true,
                        "startTBA": false
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-10",
                        "localTime": "20:00:00",
                        "dateTime": "2023-10-11T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "offsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-10-2023/event/Z7r9jZ1Adx6k8",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Adx6k8?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Adx6-w",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Adx6-w",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startTBD": true,
                        "startTBA": false
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-13",
                        "localTime": "20:00:00",
                        "dateTime": "2023-10-14T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "offsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-13-2023/event/Z7r9jZ1Adx6-w",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Adx6-w?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad-KAO",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad-KAO",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T18:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-10-15T03:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-14",
                        "localTime": "20:00:00",
                        "dateTime": "2023-10-15T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-14-2023/event/Zu0FM1R0e5tZ45_",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad-KAO?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad-KA-",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad-KA-",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T18:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-10-15T21:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-15",
                        "localTime": "14:00:00",
                        "dateTime": "2023-10-15T21:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-15-2023/event/Zu0FM1R0e5tZ45Z",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad-KA-?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad-KAx",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad-KAx",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T18:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-10-21T18:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-21",
                        "localTime": "11:00:00",
                        "dateTime": "2023-10-21T18:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-21-2023/event/Zu0FM1R0e5tZ45W",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad-KAx?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Adx6-S",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Adx6-S",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startTBD": true,
                        "startTBA": false
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-27",
                        "localTime": "20:00:00",
                        "dateTime": "2023-10-28T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "offsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-27-2023/event/Z7r9jZ1Adx6-S",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Adx6-S?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad-KAN",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad-KAN",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T18:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-10-28T18:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-28",
                        "localTime": "11:00:00",
                        "dateTime": "2023-10-28T18:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-28-2023/event/Zu0FM1R0e5tZ45b",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad-KAN?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Adx6-V",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Adx6-V",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startTBD": true,
                        "startTBA": false
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-28",
                        "localTime": "14:00:00",
                        "dateTime": "2023-10-28T21:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "offsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-28-2023/event/Z7r9jZ1Adx6-V",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Adx6-V?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Los Angeles Philharmonic",
                "type": "event",
                "id": "Z7r9jZ1Ad-KAJ",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad-KAJ",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "distance": 0.08,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T18:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2023-10-29T21:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2023-10-29",
                        "localTime": "14:00:00",
                        "dateTime": "2023-10-29T21:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/los-angeles-philharmonic-los-angeles-california-10-29-2023/event/Zu0FM1R0e5tZ45f",
                        "type": "tmMarketPlace"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1Ad-KAJ?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 0.08,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 131,
                                "tmr": 131,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Los Angeles Philharmonic",
                            "type": "attraction",
                            "id": "K8vZ917uP07",
                            "test": false,
                            "url": "https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/channel/UCoLoZgxkPgkiD--8zrHAbwg"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/LAPhil"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://applemusic.com/laphil"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Philharmonic"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/LAPhil/"
                                    }
                                ],
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/6yeL5iw4hXNZtd8T7FOoFU"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "98e4313e-dfb0-4084-805c-3e42ef9301d0"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/laphil/"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.laphil.org/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d0d/ff678bd6-b134-40d8-9010-2ad1223e3d0d_1100241_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7A",
                                        "name": "Orchestra"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 96,
                                "tmr": 96,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uP07?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    "_links": {
        "first": {
            "href": "/discovery/v2/events.json?unit=miles&segmentId=KZFzniwnSyZfZ7v7nJ&geoPoint=9q5ckq4&radius=10&keyword=Los+Angeles&page=0&size=20"
        },
        "self": {
            "href": "/discovery/v2/events.json?unit=miles&segmentId=KZFzniwnSyZfZ7v7nJ&geoPoint=9q5ckq4&radius=10&keyword=Los+Angeles"
        },
        "next": {
            "href": "/discovery/v2/events.json?unit=miles&segmentId=KZFzniwnSyZfZ7v7nJ&geoPoint=9q5ckq4&radius=10&keyword=Los+Angeles&page=1&size=20"
        },
        "last": {
            "href": "/discovery/v2/events.json?unit=miles&segmentId=KZFzniwnSyZfZ7v7nJ&geoPoint=9q5ckq4&radius=10&keyword=Los+Angeles&page=53&size=20"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 1079,
        "totalPages": 54,
        "number": 0
    }
  };


  axios.get.mockResolvedValueOnce({ data: mockData1 });

  const response1 = await request(app).get('/events/Los%20Angeles/KZFzniwnSyZfZ7v7nJ/10/miles/9q5ckq4');
  expect(response1.status).toBe(200);
  expect(response1.body).toEqual(mockData1);
});
  

});


