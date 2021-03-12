module.exports = {
  "helpers": {},
  "prompts": {
    "library":{
      type: "string",
      "required": false,
      "message": "Libray Name",
      "default": "DefaultLibrary"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Description",
      "default": "Hummer Project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    }
  },
  "filters": {},
  "completeMessage": "Start: cd {{destDirName}}"
};
