import * as firebase from "firebase";

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

export function downloadFile(path: string): Promise<string> {
  var promise = new Promise<string>((resolve, reject) => {
    getCloudStorageRef()
      .child(path)
      .getDownloadURL()
      .then(url => {
        resolve(url);
      })
      .catch(err => reject(null));
  });
  return promise;
}
export function getCloudStorageRef() {
  return firebase.storage().ref();
}
export function getCloudFirestore() {
  return firebase.firestore();
}
