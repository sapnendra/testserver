import 'dotenv/config'
import express from 'express';

const app = express();
const githubData = {
  "login": "sapnendra",
  "id": 116286507,
  "node_id": "U_kgDOBu5kKw",
  "avatar_url": "https://avatars.githubusercontent.com/u/116286507?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sapnendra",
  "html_url": "https://github.com/sapnendra",
  "followers_url": "https://api.github.com/users/sapnendra/followers",
  "following_url": "https://api.github.com/users/sapnendra/following{/other_user}",
  "gists_url": "https://api.github.com/users/sapnendra/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sapnendra/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sapnendra/subscriptions",
  "organizations_url": "https://api.github.com/users/sapnendra/orgs",
  "repos_url": "https://api.github.com/users/sapnendra/repos",
  "events_url": "https://api.github.com/users/sapnendra/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sapnendra/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sapnendra Jaiswal ",
  "company": "JaiswalCrockery",
  "blog": "https://sapnendra.github.io",
  "location": "Bhopal, Madhya Pradesh ",
  "email": null,
  "hireable": null,
  "bio": "|| learning and sharing ||\r\nB.Tech(CSE) specialist at\r\nRGPV, Bhopal, Madhya-Pradesh",
  "twitter_username": "Xsapnendra",
  "public_repos": 58,
  "public_gists": 0,
  "followers": 100,
  "following": 25,
  "created_at": "2022-10-20T13:57:59Z",
  "updated_at": "2025-07-26T14:03:19Z"
}

app.get("/", (req, res) => {
    res.send("<h1>Home Route</h1>");
})

app.get("/login", (req, res) => {
    res.send("<h1>login route</h1>")
})

app.get("/logout", (req, res) => {
    res.send("<h1>Loging Out Rooute</h1>")
})

app.get("/github", (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
})