import { getCloudFirestore } from "./FirebaseDao";

import { isValidCeleb } from "../Util";
import CelebsModel from "../Models/CelebsModel";

//Add Movie to Backend
export function addCeleb(celeb: CelebsModel): Promise<any> {
  var promise = new Promise((resolve, reject) => {
    var validity = isValidCeleb(celeb);
    if (validity.isValid) {
      if (celeb && celeb.name) {
        getCloudFirestore()
          .collection("celebs")
          .doc(celeb.name)
          .set(celeb)
          .then(res => {
            resolve(validity);
            console.log("form submitted");
          })
          .catch(err => {
            reject(err);
            console.log("error", err);
          });
      } else {
        reject(validity);
      }
    } else {
      reject(validity);
    }
  });

  return promise;
}
export const getCelebs = async setCelebList => {
  var list: Array<CelebsModel> = [];
  var promise = new Promise((resolve, reject) => {
    getCloudFirestore()
      .collection("celebs")
      .onSnapshot(async snapshot => {
        await snapshot.docChanges().map((change, index) => {
          if (change.type === "added") {
            // console.log("New city: ", change.doc.data());
            var data = change.doc.data();
            var celeb: CelebsModel = {
              name: data.name,
              bio: data.bio,
              dob: data.dob,
              gender: data.gender
            };
            if (celeb) list.push(celeb);
          }
          if (change.type === "modified") {
            //   console.log("Modified city: ", change.doc.data());
          }
          if (change.type === "removed") {
            //   console.log("Removed city: ", change.doc.data());
          }
        });
        console.log(list);
        setCelebList(list);

        // console.log(movieList);
      });
  });
};
