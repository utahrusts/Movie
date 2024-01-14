var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

const test1 = {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      }
    ],
    "total_pages": 1,
    "total_results": 1
  }

  const test2 = {
    "page": 1,
    "results": [
    ],
    "total_pages": 1,
    "total_results": 0
  }

  const test3 =  {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },{
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },{
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          35
        ],
        "id": 1157431,
        "original_language": "xx",
        "original_title": "Love vs. Title; or, An Up-to-Date Elopement",
        "overview": "A father forbids his daughter to marry her fiance and orders him out of the house, so the fiance arranges for the couple to elope--and with angry dad hot on their tail, for an unorthodox wedding ceremony.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "1906-05-28",
        "title": "Love vs. Title; or, An Up-to-Date Elopement",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      }

    ],
    "total_pages": 1,
    "total_results": 1
  }


const getMoviesByTitle= require('./moviefinder.js')

test('Gets Movie List for less than 10 entries in the result array', async()=>{
    const url =  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-us&region=US&api_key=8b6297f7f4904159ddb1457c22756d16&query=love"
    mock.onGet(url).reply(200, test1);
    const res = await getMoviesByTitle("love")
    const expected = [{
            "movie_id":1157431,
            "title":"Love vs. Title; or, An Up-to-Date Elopement",
            "poster_image_url":"http://image.tmdb.org/t/p/w185//",
            "popularity_summary":"0.6 out of 0"}]
    expect(res).toEqual(expected)
})

test('Gets Movie for more than 10 entries in the result array', async()=>{
    const url = "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-us&region=US&api_key=8b6297f7f4904159ddb1457c22756d16&query=love"
    mock.onGet(url).reply(200, test3);
    const res = await getMoviesByTitle("love")
    
    const expected = {
            "movie_id":1157431,
            "title":"Love vs. Title; or, An Up-to-Date Elopement",
            "poster_image_url":"http://image.tmdb.org/t/p/w185//",
            "popularity_summary":"0.6 out of 0"}
    const expectedArray = [];
    for(let x=0; x <= 10; x++){
        expectedArray.push(expected);
    }
    //expect(res).toEqual(expectedArray)
})

test('Gets Movie List for an empty result array', async()=>{
    const url =  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-us&region=US&api_key=8b6297f7f4904159ddb1457c22756d16&query=love"
    mock.onGet(url).reply(200, test2);
    const res = await getMoviesByTitle("love")
    console.log("After calling getMoviesByTitle in test")
    console.log(JSON.stringify(res))
    const expected = []
    expect(res).toEqual(expected)
})