import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Judah_Digital_Studio',
  title: 'Judahs Digital Garden Studio',
  projectId,
  dataset,
  apiVersion: '2021-10-21',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes
  }
});
