// schemas/documents/pdf.js

export default {
    name: "resume",
    type: "document",
    title: "Resume",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "file",
        type: "file",
        title: "PDF File",
        validation: (Rule) => Rule.required()
      },
    ],
  };
  