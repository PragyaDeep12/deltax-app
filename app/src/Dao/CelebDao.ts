import { getCloudFirestore } from "./FirebaseDao";

import CelebsModel from "../Models/CelebsModel";
import { isValidCeleb } from "../Util";

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
// export const getCelebs = async setCelebList => {
//   var list: Array<CelebsModel> = [];
//   getCloudFirestore()
//     .collection("celebs")
//     .onSnapshot(
//       snapshot => {
//         snapshot.docs.forEach(
//           QueryDocumentSnapShot => {
//             var data = QueryDocumentSnapShot.data();
//             var celeb: CelebsModel = {
//               name: data.name,
//               bio: data.bio,
//               dob: data.dob,
//               gender: data.gender
//             };
//             list.push(celeb);
//           },
//           err => {
//             console.log(err);
//           }
//         );
//         // await snapshot.docChanges().map((change, index) => {
//         //   if (change.type === "added") {
//         //     // console.log("New city: ", change.doc.data());
//         //     var data = change.doc.data();
//         //     var celeb: CelebsModel = {
//         //       name: data.name,
//         //       bio: data.bio,
//         //       dob: data.dob,
//         //       gender: data.gender
//         //     };
//         //     if (celeb) list.push(celeb);
//         //   }
//         //   if (change.type === "modified") {
//         //     //   console.log("Modified city: ", change.doc.data());
//         //   }
//         //   if (change.type === "removed") {
//         //     //   console.log("Removed city: ", change.doc.data());
//         //   }
//         // });
//         console.log(list);
//         setCelebList(list);
//       },
//       err => {}
//     );
// };
