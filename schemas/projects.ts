export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'site',
        type: 'url',
        title: 'Site'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: "slug",
        title: "Slug",
        type: 'slug',
        options: {source: 'name'},

      },
      {
        name: 'techStack',
        type: 'array',
        title: 'Tech Stack',
        of: [{'type': 'string'}]
      }
    ]
  }
  