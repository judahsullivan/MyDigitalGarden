import { defineType } from 'sanity';

export default defineType({
  name: 'features',
  title: 'Features',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'href',
      title: 'Href',
      type: 'url'
    },
    {
      name: 'content',
      title: 'content',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string'
    }
  ]
});
