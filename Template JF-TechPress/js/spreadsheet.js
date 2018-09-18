/**
 * Retrieve a list of files belonging to a folder.
 *
 * @param {String} folderId ID of the folder to retrieve files from.
 * @param {Function} callback Function to call when the request is complete.
 *
 */
function retrieveAllFilesInFolder(folderId, callback) {
    var retrievePageOfChildren = function(request, result) {
      request.execute(function(resp) {
        result = result.concat(resp.items);
        var nextPageToken = resp.nextPageToken;
        if (nextPageToken) {
          request = gapi.client.drive.children.list({
            'folderId' : folderId,
            'pageToken': nextPageToken
          });
          retrievePageOfChildren(request, result);
        } else {
          callback(result);
        }
      });
    }
    var initialRequest = gapi.client.drive.children.list({
        'folderId' : folderId
      });
    retrievePageOfChildren(initialRequest, []);
  }