const page = {
  name:"pages",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxlength: 96
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: "block"}],
    }
  ]
}

export default page;