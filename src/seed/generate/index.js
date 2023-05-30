import Promise from "bluebird"; // Why bluebird ? Because : https://dyma.fr/developer/list/chapters/core/5e0f7f7afca6a0672cb20dba/lesson/javascript/5e10e437a6ace25f7d73aa19/14/4
import users from "./users.json";
import housing from "./housing.json";

const initDB = async () => {
  await Promise.all(
    users.map((user) => {
      // Send POST REQUEST to API
    })
  );

  await Promise.all(
    housing.map((user) => {
      // Send POST REQUEST to API
    })
  );
};
