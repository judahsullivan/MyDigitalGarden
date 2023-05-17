import {defineConfig} from 'sanity'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId= process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset  = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'Judah_Digital_Studio',
  title: 'Judahs Digital Garden Studio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), vercelDeployTool(),],
  schema: {
    types: schemaTypes,
  },
})

