import React, { useState } from 'react'

const AxiosTest = () => {
  const [axi, setaxi] = useState([]);

  // const url1 = "http://127.0.0.1:8000/api/v1/token/"
  const url1 = "http://127.0.0.1:8000/api/v1/token/"
  const url2 = "http://127.0.0.1:8000/user/"
  const url3 = "http://127.0.0.1:8000/tokenRefresh/"
  const url4 = "http://127.0.0.1:8000/getRefresh/"
  const url5 = "http://127.0.0.1:8000/logout/"
  const url6 = "http://127.0.0.1:8000/fetchTest/"

  const access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNjc0MDA5LCJpYXQiOjE2NzE2NzM3MDksImp0aSI6IjY0ZDAyMzc1YjNmODRjOTM5OWU2ZGY4Zjg0MWVkZDMxIiwidXNlcl9pZCI6MX0.0fNN7-igrUkiQ9wsgAyavC59M_LtqAyYJlfHvFZIKnk"
  const refresh_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MTc2MDEwOSwiaWF0IjoxNjcxNjczNzA5LCJqdGkiOiI2MTlmZDIxNjNiMGM0YWJhYWQ0OGM2NjBkZWNmYzU4NSIsInVzZXJfaWQiOjF9.okPQ7ITYyW8v1yZe1QGMZzrwNbokiMvvPV2PyOJRx9g"

  const jwt = async () => {
    const res = await fetch(url1, {
      method: "POST",

      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'text/plain'
      },
      // mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({ email: "admin@admin.com", password: "password" })
      // body: "{ email: 'admin@admin.com', password: 'password' }",
    })
  }

  const fetchtest = async () => {
    const response = await fetch(url2, {
      method: "GET",
      credentials: 'include',
    }).then((res) => {
      console.log(res)
      return res.json()
    }).then((result) => {
      console.log(result.username)
    })


    // console.log(typeof (res))

  }

  const logout = async () => {
    const newtoken = await fetch(url5, {
      method: "GET",
      headers: {
        // 'Content-Type': 'application/json,charset=utf-8',
        // "X-CSRFToken": 'J3TEUknXxLelz72fQLxkyb4SCsiRxpTKMCdskSyH7g8hgGQzxQPWNwc6hVTertvC',
        //   // 'Content-Type': 'text/plain'
        // },
        // headers: {
        // 'Content-Type': 'application/json'
      },
      // body: JSON.stringify({ "access_token": access_token, "refresh_token": refresh_token }),
      credentials: 'include',
    })
    // console.log(newtoken)
  }

  const refresh = async () => {
    const res = await fetch(url3, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "X-CSRFToken": 'J3TEUknXxLelz72fQLxkyb4SCsiRxpTKMCdskSyH7g8hgGQzxQPWNwc6hVTertvC',
        // 'Content-Type': 'text/plain'
      },
      credentials: 'include',
      body: JSON.stringify({ "refresh": refresh_token },)
      // body: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MTcwNzQ3MiwiaWF0IjoxNjcxNjIxMDcyLCJqdGkiOiI1OTEwNGQwYWRmZjM0MDJiOTc2Njk2YTRhOWZjYzkyZSIsInVzZXJfaWQiOjF9.O4lKyes9Ab-OL1TqJWS_kD5MGYR3vW0HVae3yzoiVu0"
      // body: JSON.stringify("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MTY5ODgxNSwiaWF0IjoxNjcxNjEyNDE1LCJqdGkiOiJiZGY0ZmY3NWFjOTI0YWI0YTcyMjhhYjNjNzI2YmYzNiIsInVzZXJfaWQiOjF9.k7a-zNPAuAXB6MG1FkpIdapmS15fesOdERZDbqoN2gA")
      // headers: {
      //   'Content-Type': 'application/json'
      // },
    })

    // console.log(res)
  }

  return (
    <div>
      <button onClick={jwt}>http://127.0.0.1:8000/api/v1/token/</button>
      <button onClick={logout}>logout</button>
      <button onClick={refresh}>tokenrefresh</button>
      <button onClick={fetchtest}>fetchtest</button>
    </div>);

}
export default AxiosTest;

