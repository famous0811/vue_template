import axiosClient from "@/api/client";

interface SignProps {
  username: string;
  password: string;
}
export default {
  state: {},
  getters: {},
  actions: {
    SIGN_UP({}, data: SignProps) {
      return new Promise((resolve, reject) => {
        axiosClient
          .post("/user", {
            userid: data.username,
            password: data.password,
          })
          .then((result: any) => {
            if (result.result === true) {
              resolve(result);
            } else {
              reject(result);
            }
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    SIGN_IN({}, data: SignProps) {
      return new Promise((resolve, reject) => {
        axiosClient
          .post("/auth", {
            userid: data.username,
            password: data.password,
          })
          .then((result: any) => {
            if (result.result === true) {
              resolve(result);
            } else {
              reject(result);
            }
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
  },
};
