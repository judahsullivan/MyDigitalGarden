import {defineType} from 'sanity'

export default defineType({
  name: 'techstack',
  title: 'TechStack',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
  ],
})
