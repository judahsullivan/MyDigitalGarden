import groq from 'groq'

export const query = groq`count(*[])`

export function DocumentsCount({data}: any) {
  return (
    <>
      Documents: <strong>{data}</strong>
    </>
  )
}