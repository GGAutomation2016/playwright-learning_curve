import { test, expect } from "@playwright/test";

var userid;

test("GET USERS", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test("CREATE USERS", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "test",
      job: "automation1",
    },
    headers: {
      Accept: "application/json",
    },
  });
  console.log(await response.json());
  expect(response.status()).toBe(201);

  var res = await response.json()
  userid = res.id
});

test("UPDATE USERS", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/" + userid, {
    data: {
      name: "test",
      job: "developer",
    },
    headers: {
      Accept: "application/json",
    },
  });
  console.log(await response.json());
  expect(response.status()).toBe(200);

  var res = await response.json()
  userid = res.id
});

test("DELETE USERS", async ({ request }) => {
   const response = await request.delete("https://reqres.in/api/users/" + userid);
   expect(response.status()).toBe(204);
});
