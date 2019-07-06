import * as firebase from "firebase";
import MovieModel from "../Models/MovieModel";
export function uploadFile(
  file,
  setIsUploading
): Promise<{ downloadPath: string; file: any }> {
  var promise = new Promise<{ downloadPath: string; file: any }>(
    (resolve, reject) => {
      var refChild = getCloudStorageRef().child(
        "images/" + new Date().getTime()
      );
      refChild
        .put(file)
        .then(res => {
          setIsUploading(false);
          console.log(res);
          resolve({ downloadPath: res.metadata.fullPath, file: file });
        })
        .catch(error => {
          reject(null);
          console.log(error);
        });
    }
  );
  return promise;
}

export function getCloudStorageRef() {
  return firebase.storage().ref();
}
export function getCloudFirestore() {
  return firebase.firestore();
}